1.当我们开启上面一篇文章的服务`go run main.go`，此时在ListenAndServe方法会先创建一个`Server`结构。


```go
// ListenAndServe always returns a non-nil error.
func ListenAndServe(addr string, handler Handler) error {
   server := &Server{Addr: addr, Handler: handler}
   return server.ListenAndServe()
}
```

2. 开启`net.Listen`进行监听，调用 `srv.Serve(ln)`

```go
// ListenAndServe always returns a non-nil error. After Shutdown or Close,
// the returned error is ErrServerClosed.
func (srv *Server) ListenAndServe() error {
   if srv.shuttingDown() {
      return ErrServerClosed
   }
   addr := srv.Addr
   if addr == "" {
      addr = ":http"
   }
   ln, err := net.Listen("tcp", addr)
   if err != nil {
      return err
   }
   return srv.Serve(ln)
}
```



3.`Serve` 函数中，用了一个 for 循环，通过 `l.Accept`不断接收从客户端传进来的请求连接。当接收到了一个新的请求连接的时候，通过 srv.NewConn创建了一个连接结构（`http.conn`），并创建一个 Goroutine 为这个请求连接对应服务（`c.serve`）。也就是说只要服务端监听到了服务，就会开启一个goroutine。
(这里只贴上了主要的代码，因为这个函数的逻辑较多)

```go
for {
   rw, err := l.Accept()
   if err != nil {
      select {
      case <-srv.getDoneChan():
         return ErrServerClosed
      default:
      }
      if ne, ok := err.(net.Error); ok && ne.Temporary() {
         if tempDelay == 0 {
            tempDelay = 5 * time.Millisecond
         } else {
            tempDelay *= 2
         }
         if max := 1 * time.Second; tempDelay > max {
            tempDelay = max
         }
         srv.logf("http: Accept error: %v; retrying in %v", err, tempDelay)
         time.Sleep(tempDelay)
         continue
      }
      return err
   }
   connCtx := ctx
   if cc := srv.ConnContext; cc != nil {
      connCtx = cc(connCtx, rw)
      if connCtx == nil {
         panic("ConnContext returned nil")
      }
   }
   tempDelay = 0
   c := srv.newConn(rw)
   c.setState(c.rwc, StateNew, runHooks) // before Serve can return
   go c.serve(connCtx)
```



4.`c.serve`代码量很大，但是只要知道它的功能是判断本次 HTTP 请求是否需要升级为 HTTPS，接着创建读文本的 reader 和写文本的 buffer，再进一步读取本次请求数据。
（`下面代码只是很少的一部分，因为serve的函数量太大，最最重要的就是serverHandler{c.server}.ServeHTTP(w, w.req)，大家可以在此函数的大概1930行左右看到下面的代码，go1.17`）

```go
serverHandler{c.server}.ServeHTTP(w, w.req)
w.cancelCtx()
if c.hijacked() {
   return
}
w.finishRequest()
if !w.shouldReuseConnection() {
   if w.requestBodyLimitHit || w.closedRequestBodyEarly() {
      c.closeWriteAndWait()
   }
   return
}
c.setState(c.rwc, StateIdle, runHooks)
c.curReq.Store((*response)(nil))
```



5.`serverHandler{c.server}.ServeHTTP(w, w.req)`这个是最重要的函数，也就是说如果你在服务开始的时候自定义了handler，那么就使用你自定义的，如果没有，就使用go默认的。`也就是说，只要传入任何实现了 ServerHTTP接口的实例，所有的HTTP请求，就都交给了该实例处理了。`

```go
type Handler interface {
   ServeHTTP(ResponseWriter, *Request)
}

type serverHandler struct {
   srv *Server
}

func (sh serverHandler) ServeHTTP(rw ResponseWriter, req *Request) {
   handler := sh.srv.Handler
   if handler == nil {
      handler = DefaultServeMux
   }
   if req.RequestURI == "*" && req.Method == "OPTIONS" {
      handler = globalOptionsHandler{}
   }

   if req.URL != nil && strings.Contains(req.URL.RawQuery, ";") {
      var allowQuerySemicolonsInUse int32
      req = req.WithContext(context.WithValue(req.Context(), silenceSemWarnContextKey, func() {
         atomic.StoreInt32(&allowQuerySemicolonsInUse, 1)
      }))
      defer func() {
         if atomic.LoadInt32(&allowQuerySemicolonsInUse) == 0 {
            sh.srv.logf("http: URL query contains semicolon, which is no longer a supported separator; parts of the query may be stripped when parsed; see golang.org/issue/25192")
         }
      }()
   }

   handler.ServeHTTP(rw, req)
}
```



6.经过上面的分析我们也就知道了go语言web服务的大致流程，也就是说如果我们想要修改web服务，或者说定制web，那么我们只需要自定义handler就可以完成了。

go默认的DefaultServeMux只是简单的使用map来存放路由，key是路径，比如/hello，value是具体的处理逻辑。这也是一般开发不使用原生web的原因。