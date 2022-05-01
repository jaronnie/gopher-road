gin框架使用的是定制版本的`httprouter`。我们来分析一下`httprouter`
下面是`httprouter`的`demo`

```go
package main

import (
   "fmt"
   "log"
   "net/http"

   "github.com/julienschmidt/httprouter"
)

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
   fmt.Fprint(w, "Welcome!\n")
}

func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
   fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}

func main() {
   router := httprouter.New()
   router.GET("/", Index)
   router.GET("/hello/:name", Hello)

   log.Fatal(http.ListenAndServe(":8080", router))
}
```





这是我在`httprouter`里面找到的代码,也就是httprouter的路由匹配的逻辑：

```go
// ServeHTTP makes the router implement the http.Handler interface.
func (r *Router) ServeHTTP(w http.ResponseWriter, req *http.Request) {
   if r.PanicHandler != nil {
      defer r.recv(w, req)
   }

   path := req.URL.Path

   if root := r.trees[req.Method]; root != nil {
      if handle, ps, tsr := root.getValue(path); handle != nil {
         handle(w, req, ps)
         return
      } else if req.Method != http.MethodConnect && path != "/" {
         code := 301 // Permanent redirect, request with GET method
         if req.Method != http.MethodGet {
            // Temporary redirect, request with same method
            // As of Go 1.3, Go does not support status code 308.
            code = 307
         }

         if tsr && r.RedirectTrailingSlash {
            if len(path) > 1 && path[len(path)-1] == '/' {
               req.URL.Path = path[:len(path)-1]
            } else {
               req.URL.Path = path + "/"
            }
            http.Redirect(w, req, req.URL.String(), code)
            return
         }

         // Try to fix the request path
         if r.RedirectFixedPath {
            fixedPath, found := root.findCaseInsensitivePath(
               CleanPath(path),
               r.RedirectTrailingSlash,
            )
            if found {
               req.URL.Path = string(fixedPath)
               http.Redirect(w, req, req.URL.String(), code)
               return
            }
         }
      }
   }

   if req.Method == http.MethodOptions && r.HandleOPTIONS {
      // Handle OPTIONS requests
      if allow := r.allowed(path, http.MethodOptions); allow != "" {
         w.Header().Set("Allow", allow)
         if r.GlobalOPTIONS != nil {
            r.GlobalOPTIONS.ServeHTTP(w, req)
         }
         return
      }
   } else if r.HandleMethodNotAllowed { // Handle 405
      if allow := r.allowed(path, req.Method); allow != "" {
         w.Header().Set("Allow", allow)
         if r.MethodNotAllowed != nil {
            r.MethodNotAllowed.ServeHTTP(w, req)
         } else {
            http.Error(w,
               http.StatusText(http.StatusMethodNotAllowed),
               http.StatusMethodNotAllowed,
            )
         }
         return
      }
   }

   // Handle 404
   if r.NotFound != nil {
      r.NotFound.ServeHTTP(w, req)
   } else {
      http.NotFound(w, req)
   }
}
```

了解了这些，我们就可以知道为什么gin这么快了，其路由的原理是大量使用公共前缀的树结构，它基本上是一个紧凑的[Trie tree](https://baike.sogou.com/v66237892.htm)。具有公共前缀的节点也共享一个公共父节点。

**所以我们可以根据不同的逻辑来改变web服务的匹配的逻辑，来实现我们的定制web服务**