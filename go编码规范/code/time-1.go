package main

import (
	"fmt"
	"time"
)

func main() {
	//开始的时间
	start := time.Now()
	//截止的时间 2s钟
	stop := start.Add(2 * time.Second)
	var b bool
	for {
		//判断是否时间已到
		if b = isActive(time.Now(), start, stop); !b {
			fmt.Println("time out")
			break
		}
		fmt.Println(b)
	}
}

func isActive(now, start, stop time.Time) bool {
	return (start.Before(now) || start.Equal(now)) && now.Before(stop)
}
