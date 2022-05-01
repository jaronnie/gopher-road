重要的事再强调一遍，`也就是说，只要传入任何实现了 ServerHTTP接口的实例，所有的HTTP请求，就都交给了该实例处理了。`（这句话是从兔兔大佬那边抄过来的，也是最重要的一个结论）



```go
package main

import (
   "fmt"
   "log"
   "net/http"
)

// Engine is the uni handler for all requests
type Engine struct{}

func (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
   switch req.URL.Path {
   case "/":
      fmt.Fprintf(w, "URL.Path = %q\n", req.URL.Path)
   case "/hello":
      for k, v := range req.Header {
         fmt.Fprintf(w, "Header[%q] = %q\n", k, v)
      }
   default:
      fmt.Fprintf(w, "404 NOT FOUND: %s\n", req.URL)
   }
}

func main() {
   engine := new(Engine)
   log.Fatal(http.ListenAndServe(":9999", engine))
}
```



## 参考链接

-  [极客兔兔](https://geektutu.com/post/gee.html)

- [轩脉刃](https://www.cnblogs.com/yjf512/)

