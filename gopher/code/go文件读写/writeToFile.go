
package main

import (

	"fmt"
	"bufio"
	"os"
	"time"

)

func main() {

	fmt.Println("开始写文件")

	outputfile, _ := os.OpenFile("test.txt", os.O_WRONLY | os.O_CREATE, 0666)

	defer outputfile.Close()

	outputWriter := bufio.NewWriter(outputfile) //创建一个缓冲写入对象

	//不适用缓冲
    	//直接写
   	outputfile.WriteString("test\n")

	outputWriter.WriteString("I love you!!!\n")

	for i := 0; i < 10; i++ {

		outputWriter.WriteString("I love go\n")


	}

	time.Sleep(2 * time.Second)
	outputWriter.Flush()
	fmt.Println("数据写入成功")


}

