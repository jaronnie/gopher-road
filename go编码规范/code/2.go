package main

import (
	"fmt"
	"log"
	"net/http"
)

type Engine struct {

}

func main() {
	engine := &Engine{}
	if err := http.ListenAndServe(":8080", engine); err != nil {
		log.Fatal("run error")
	}
}


//接口验证
var _ http.Handler = (*Engine)(nil)
//实现ServeHttp接口
func (e *Engine) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch r.URL.Path {
	case "/":
		_, _ = fmt.Fprintf(w, "you are at '/'")
	case "/hello":
		_, _ = fmt.Fprintf(w, "you are at '/hello'")
	default:
		_, _ = fmt.Fprintf(w, "404 page not found")
	}
}
