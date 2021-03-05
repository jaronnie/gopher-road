
package main


import (

	"fmt"

	"bufio"
	
	_"strconv"
	
	"os"

)


//带缓冲的读取。适合用来读取文件等

func main() {


	inputReader := bufio.NewReader(os.Stdin) //创建一个读取器
	
	fmt.Println("请输入姓名")
	
	a, _ := inputReader.ReadString('\n') //碰到换行停止读取
	
	fmt.Println(a) 
	

	

}
