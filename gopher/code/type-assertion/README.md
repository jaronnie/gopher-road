

# go类型断言与类型判断

> 格式：a := any.(float32)
>
> 判断any是否是float，如果不是，转换成float32
>
> 其中，any必须是一个接口变量



```go
package main

import (

	"fmt"
)

//类型断言11.3
type Point struct {

	x, y int
}

func main() {

	var a interface{}
	var point Point = Point{1, 3}
	a = point
	var b Point
	var ok bool
	if _, ok = a.(Point); ok {
	
		b = a.(Point)
		fmt.Println(b)
	} else {
		fmt.Println("convert fail")
	}
}
```

# 类型断言最佳实践

```go
package main

import (

	"fmt"
)

//声明一个电脑Usb接口
type Usb interface {

	//声明两个方法
	Start()
	Stop()
}

//声明computer类
type Computer struct {
	
}

//声明phone类
type Phone struct {
	
}

//声明camera类
type Camera struct {

}


//绑定方法，实现接口
func (p *Phone) Start() {
	fmt.Println("手机开始工作!")
}

func (p *Phone) Stop() {
	fmt.Println("手机停止工作!")
}

func (c *Camera) Start() {
	fmt.Println("摄像机开始工作!")
}

func (c *Camera) Stop() {
	fmt.Println("摄像机停止工作!")
}


func (c *Computer) Working(u Usb) {
	u.Start()
	u.Stop()
}

func main() {
	
	computer := new(Computer)
	phone := new(Phone)
	camera := new(Camera)
	computer.Working(phone)
	computer.Working(camera)
	
}
```

在这个例子中给Phone结构体增加一个特有的方法call(),当Usb接口接受的是Phone类型的变量，还需要调用call()方法

```go
package main

import (

	"fmt"
)

//声明一个电脑Usb接口
type Usb interface {

	//声明两个方法
	Start()
	Stop()
}

//声明computer类
type Computer struct {
	
}

//声明phone类
type Phone struct {
	
}

//声明camera类
type Camera struct {

}


//绑定方法，实现接口
func (p *Phone) Start() {
	fmt.Println("手机开始工作!")
}

func (p *Phone) Stop() {
	fmt.Println("手机停止工作!")
}


//Phone类特有的方法
func (p *Phone) Call() {

	fmt.Println("手机开始通话!")
}

func (c *Camera) Start() {
	fmt.Println("摄像机开始工作!")
}

func (c *Camera) Stop() {
	fmt.Println("摄像机停止工作!")
}


func (c *Computer) Working(u Usb) {
	
	u.Start()
    //判断传入的Usb类型是否是Phone,如果能转换成功，则说明是Phone类型，调用phone的Call()方法
	if phone, ok := u.(*Phone); ok {

		phone.Call()
	}
	u.Stop()
}

func main() {
	
	computer := new(Computer)
	phone := new(Phone)
	camera := new(Camera)
	computer.Working(phone)
	computer.Working(camera)
	
}
```

# 类型判断:type-switch

```go

package main

import (

	"fmt"
)


func TypeJudge(items... interface{}) {
	for index, t := range items {
		
		switch t.(type) {

		case int, int32, int64 :

			fmt.Println(index, "int/int32/int64类型")

		case float32, float64 :
			fmt.Println(index, "float32/float64类型")
		
		case string :
			fmt.Println(index, "string类型")
		case []int :
			fmt.Println(index, "[]int类型")
		default :
			fmt.Println(index, "unknown")
		}
	} 
}

func main() {

	TypeJudge("nj", []int{1, 3, 4}, 3222, []float32{1.1, 3.2}, 530.0)

}
```



