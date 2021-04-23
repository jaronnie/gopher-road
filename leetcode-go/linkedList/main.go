package main

import (
	"linkedList/singleLinkedList"
	"log"
	"sync"

	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
)

type LRUBuffer struct {
	mu         sync.Mutex
	list       *singleLinkedList.SingleLinkedList
	bufferSize int
}

var lru = new(LRUBuffer)

func main() {
	//创建一个缓存
	lru.list = singleLinkedList.New()
	//大小为10
	lru.bufferSize = 10
	r := gin.Default()
	r.POST("/buffer", getBuffer)
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}

func getBuffer(c *gin.Context) {
	d := c.PostForm("data")
	//判断缓存中有没有这个数据
	if lru.list.IsExist(cast.ToInt(d)) {
		//有则删除这个结点
		lru.mu.Lock()
		defer lru.mu.Unlock()
		lru.list.DeleteNodeByData(cast.ToInt(d))
		lru.list.InsertToHead(cast.ToInt(d))
	} else {
		//如果缓存中没有这个数据

		//1.缓存未满
		if lru.bufferSize > lru.list.Length {
			//添加数据到头部
			lru.list.InsertToHead(cast.ToInt(d))
		} else {
			//缓存已满
			//先删除尾结点，再插入头结点
			lru.mu.Lock()
			defer lru.mu.Unlock()
			lru.list.DeleteTail()
			lru.list.InsertToHead(cast.ToInt(d))
		}
	}

	c.JSON(200, gin.H{
		"data": lru.list.PrintList(),
	})
}
