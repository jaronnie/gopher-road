# go文件读写

```go
//入门案例
package main


import (

	"fmt"
	"os"
	"bufio"
	"io"

)

func main() {



	inputfile, inputErr := os.Open("go.txt")
	
	defer inputfile.Close()

	if inputErr != nil {

		fmt.Println("read err")
		os.Exit(0)
	}

	inputReader := bufio.NewReader(inputfile)
		
	for {
	
		outputLine, readErr := inputReader.ReadString('\n')
		
		fmt.Print(outputLine) //再使用Println就会出现空行的情况
 		
		if readErr == io.EOF {
		
			os.Exit(0)
		}
	}

}

```

# go将文件内容读到切片中

> 将文件内容读到切片中并写到另一个文件中去

```go
package main


import (

	"fmt"
	"os"
	"io/ioutil"

)


func main() {


	inputfile := "go.txt"
	outputfile := "cp-go.txt"
	
	buf, err := ioutil.ReadFile(inputfile)
	
	if err != nil {
	
		fmt.Println("read err")
		os.Exit(0)
	}
		
	fmt.Println(string(buf))
	
	err = ioutil.WriteFile(outputfile, buf, 0755) 
	
	if err != nil {
		
		fmt.Println("写入失败")	
	
	}
}
```

# 写文件

```go
//案例
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
    outputfile.WriteSring("test\n")

	outputWriter.WriteString("I love you!!!\n")

	for i := 0; i < 10; i++ {
		outputWriter.WriteString("I love go\n")
	}
	time.Sleep(2 * time.Second)
	outputWriter.Flush()
	fmt.Println("数据写入成功")
}
//运行结果
test
I love you!!!
I love go
I love go
I love go
I love go
I love go
I love go
I love go
I love go
I love go
I love go
```

# 实践

> ```go
> type Page struct {
>     Title string
>     Body  []byte
> }
> ```
>
> 请给这个结构编写一个 `save` 方法，将 Title 作为文件名、Body作为文件内容，写入到文本文件中。
>
> 再编写一个 `load` 函数，接收的参数是字符串 title，该函数读取出与 title 对应的文本文件。请使用 `*Page` 做为参数，因为这个结构可能相当巨大，我们不想在内存中拷贝它。请使用 `ioutil` 包里的函数

```go
package main

import (


	"fmt"
	"os"
	"io/ioutil"
)

type Page struct {

	Title string
	Body []byte

}

func (p *Page) save() {


	outputfile, _ := os.OpenFile(p.Title, os.O_WRONLY | os.O_CREATE, 0666)
	outputfile.Write(p.Body)

}

func (p *Page) load(title string) {

	output, _ := ioutil.ReadFile(title)
	fmt.Println(string(output))

}

func main() {


	p := &Page{"nj.txt", []byte("本章:文件读写")}

	p.save()

	p.load("nj.txt")

}
```

