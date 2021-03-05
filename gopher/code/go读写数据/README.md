# go 读取输入

```go
//入门案例，与C类似但又不同
//fmt.Scanf等系列有两个返回值，一个是正确读入数据的个数，一个err
package main

import (

	"fmt"

)

func main() {
    
	var i int
	fmt.Println("请输入一个整数")
	_, err := fmt.Scanf("%d\n", &i)
	
	if  err != nil {
	
		fmt.Println("请输入一个整数!!!")
		
	} else {
	
		fmt.Println(i)
	}
}
```

# 使用bufio的缓冲读取方式

```go
//入门案例
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
```

