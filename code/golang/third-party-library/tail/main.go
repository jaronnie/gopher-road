package main

import (
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/hpcloud/tail"
)

func main() {
	// 新启动一个协程一直往文件中写入
	go writeSteam()

	fileName := "./my.log"
	tailfs, err := tail.TailFile(fileName, tail.Config{
		ReOpen:    true,                                 // 文件被移除或被打包，需要重新打开
		Follow:    true,                                 // 实时跟踪
		Location:  &tail.SeekInfo{Offset: 0, Whence: 2}, // 如果程序出现异常，保存上次读取的位置，避免重新读取。
		MustExist: false,                                // 如果文件不存在，是否推出程序，false是不退出
		Poll:      true,
	})

	if err != nil {
		fmt.Println("tailf failed, err:", err)
		return
	}

	var msg *tail.Line
	var ok bool

	for true {
		msg, ok = <-tailfs.Lines
		// ok 是判断管道是否被关闭，如果关闭就是文件被重置了，需要重新读取新的管道

		if !ok {
			fmt.Println("tailf fail close reopen, fileName:", fileName)
			continue
		}
		fmt.Println("text:", msg.Text)
	}

	fmt.Println("tail end")
}

func writeSteam() {
	f, err := os.OpenFile("./my.log", os.O_APPEND|os.O_CREATE|os.O_RDWR, 0644)
	if err != nil {
		fmt.Println("open file is failed, err: ", err)
	}

	for i := 0; i < 100; i++ {
		f.WriteString("write value " + strconv.Itoa(i) + "\n")
		time.Sleep(2 * time.Second)
	}
}
