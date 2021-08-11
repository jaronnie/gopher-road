package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()
	router.GET("/", ret)
	router.Run(":8000")
}

func ret(c *gin.Context) {
	c.JSON(200, gin.H{
		"state": 1,
	})
}
