# go错误处理

> 处理机制:
>
> defer-panic-and-recover

## 定义错误

> 任何时候当你需要一个新的错误类型，都可以用 `errors`（必须先 import）包的 `errors.New` 函数接收合适的错误信息来创建 err := errors.New(" xxx")

```go
package main

import (

    "fmt"
    "errors"
)

func main(){
    
    x := -1
    if x < 0 {
        fmt.Println("Error:", errors.New("x < 0"))
    }
    fmt.Println("program continue")
}

```

## 常用于函数的返回值

```go
package main

import (
    "fmt"
    "errors"
    "math"
)

func Sqrt(f float64) (float64, error) {

    if f < 0 {

        return 0, errors.New("math - square root of negetive number")
    } else {

        return math.Sqrt(f), nil 
    }
}
func main(){
    f1, err := Sqrt(-1)
    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println(f1)
    }
}
```

## 用 fmt 创建错误对象

通常你想要返回包含**错误参数的更有信息量的字符串**，例如：可以用 `fmt.Errorf()` 来实现：它和 fmt.Printf() 完全一样，接收一个或多个格式占位符的格式化字符串和相应数量的占位变量。和打印信息不同的是它用信息生成错误对象。

比如在前面的平方根例子中使用：

```go
if f < 0 {
	return 0, fmt.Errorf("math: square root of negative number %g", f)
}
```

## 运行时异常和panic

```go
package main

import "fmt"

func main(){
    
    fmt.Println("starting program")
    panic("error...")
    fmt.Println("end program")
}

```

实际例子

```go
package main
import (
    "fmt"
    "os"
)

var user = os.Getenv("USER") 
func init() {
    if user != "jay" {
        panic("not this user")
    }
}

func main(){
    fmt.Println("welcome jay")
}
```

## 从panic中Recover

> 让程序可以从 panicking 重新获得控制权，停止终止过程进而恢复正常执行。
>
> recover` 只能在 defer 修饰的函数中使用
>
> <u>总结</u>：panic 会导致栈被展开直到 defer 修饰的 recover() 被调用或者程序中止。

```go
package main

import "fmt"


func bad() {

    panic("bad error")
}

func test() {


    defer func() {

        
        if e := recover(); e != nil {
            
            fmt.Printf("Panicing %s\n", e)
        }
    } ()
    bad()

}

func main(){

    fmt.Println("start program")
    test()
    fmt.Println("end program")
}

```

## 自定义包中的错误处理和panicking

