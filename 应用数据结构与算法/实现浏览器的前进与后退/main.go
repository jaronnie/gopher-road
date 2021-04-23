package main

import (
	"log"
	"mystack/stack"
	"sync"

	"github.com/gin-gonic/gin"
)

type Browser struct {
	mu          sync.Mutex
	arrayStackA *stack.ArrayStack
	arrayStackB *stack.ArrayStack
}

var browser = new(Browser)

func main() {
	browser.arrayStackA = stack.NewArrayStack()
	browser.arrayStackB = stack.NewArrayStack()
	r := gin.Default()
	r.POST("/click", click)
	r.GET("/back", back)
	r.GET("/forward", forward)
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}

func click(c *gin.Context) {
	browser.mu.Lock()
	defer browser.mu.Unlock()
	click := c.PostForm("url")
	if click != browser.arrayStackA.Top() {
		browser.arrayStackA.Push(click)
	}
	c.IndentedJSON(200, gin.H{
		"你正在访问": browser.arrayStackA.Top(),
		"栈A:":   browser.arrayStackA.Urls,
		"栈B":    browser.arrayStackB.Urls,
	})
}

func back(c *gin.Context) {
	browser.mu.Lock()
	defer browser.mu.Unlock()
	_, url := browser.arrayStackA.Pop()
	browser.arrayStackB.Push(url)
	c.IndentedJSON(200, gin.H{
		"你正在访问": browser.arrayStackA.Top(),
		"栈A":    browser.arrayStackA.Urls,
		"栈B":    browser.arrayStackB.Urls,
	})
}

func forward(c *gin.Context) {
	browser.mu.Lock()
	defer browser.mu.Unlock()
	_, url := browser.arrayStackB.Pop()
	browser.arrayStackA.Push(url)
	c.IndentedJSON(200, gin.H{
		"你正在访问": browser.arrayStackA.Top(),
		"栈A":    browser.arrayStackA.Urls,
		"栈B":    browser.arrayStackB.Urls,
	})
}
