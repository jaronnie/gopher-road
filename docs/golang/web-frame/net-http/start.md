下面是使用go语言内置的net包开启的一个web服务： 

```go

func main() {
   
   //注册一个服务
   http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
      fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
   })

   // 监听8080端口
   log.Fatal(http.ListenAndServe(":8080", nil))
}
```







