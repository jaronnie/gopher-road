package main

import (
	"context"
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

	fmt.Println("=========")
	//EverySecondPrint()
	ctx, cancel := context.WithTimeout(context.Background(), 2 * time.Second)
	defer cancel()
	JustOneSecond(ctx)
}

func EverySecondPrint() {
	ticker := time.NewTicker(time.Second) // 每隔1s进行一次打印
	for {
		<-ticker.C
		fmt.Println("这是ticker的打印")
	}
}

func JustOneSecond(ctx context.Context) {
	ticker := time.NewTicker(time.Second)
	for {
		select {
		case <- ticker.C:
			fmt.Println("ticker")
		case <- ctx.Done():
			return
		}
	}
}
