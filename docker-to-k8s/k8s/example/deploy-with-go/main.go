package main

import (
    "fmt"
    "net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "<h1>Hello World</h1>")
}


func main() {
    http.HandleFunc("/", index)
    http.ListenAndServe(":8888", nil)
}
