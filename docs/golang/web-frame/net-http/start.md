# http

```go
package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/post", post)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println(err)
	}
}

func post(w http.ResponseWriter, r *http.Request) {
	_, _ = fmt.Fprint(w, "hello")
}

```