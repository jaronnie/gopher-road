package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()
	fmt.Println(now)
	fmt.Println(now.UnixNano())
	// 获取当前时间的前1天
	d, _ := time.ParseDuration("-24h")
	nowBefore1day := now.Add(1 * d)
	fmt.Println(nowBefore1day)
}
