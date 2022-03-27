# gin

```go
package main

import (
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"net/http"
)

func main() {

	engine := gin.Default()
	engine.GET("/api/v1.0/hello", SayHello)
	engine.POST("/api/v1.0/post", Post)

	err := engine.Run(":8080")
	if err != nil {
		panic(err)
	}
}

func SayHello(ctx *gin.Context) {
	ctx.IndentedJSON(200, gin.H{
		"code": http.StatusOK,
		"message": "hello world",
	})
}

func Post(ctx *gin.Context) {

	args, err := ioutil.ReadAll(ctx.Request.Body)

	if err != nil {
		ctx.IndentedJSON(200, gin.H{
			"code": 200,
			"message": "invalid body",
		})
	}

	ctx.IndentedJSON(200, gin.H {
		"code": 200,
		"message": string(args),
	})
}
```