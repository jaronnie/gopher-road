# go中的函数，方法，接口的实现方法

> 第10章

## 函数

> 函数的实现方式很简单
>
> func funcname(parameter type) type {
>
> }
>
> 不做过多说明
>
> 跟其他语言类似

## 方法

> go结构体(struct) + 方法(method) == class
>
> 方法不仅仅是应用在结构体类型上的
>
> 除了接口类型，其他任何类型都可以有方法
>
> func (recv reciver_type) methodName(parameter_list) (return_value_list) {
>
> }
>
> 如果recv是一个指针，Go会自动解引用
>
> recv就类似面对对象语言中的this或者self

```go
//入门案例
//golang隐式传递指针，但是不隐式定义指针，此坑需同学们注意。
//对象的实例必须定义为指针的类型，然后才能传递正确的地址

package main

import (

	"fmt"

)

//结构体绑定一个方法

//定义结构体
type TwoInts struct {

	a int
	b int
}

func main() {

	two1 := new(TwoInts) //创建一个对象
	two1.a = 1
	two1.b = 2
	fmt.Println(two1.AddThem())
	fmt.Println(two1.AddWithParameter(3))
}

//绑定方法(无参)
func (t *TwoInts) AddThem() int {

	return t.a + t.b
}


//绑定方法(有参) 不支持重载
func (t *TwoInts) AddWithParameter(parameter int) int {

	return t.a + t.b + parameter

}	
```

```go
//非结构体类型的实现方法
//用方法实现求一个切片的所有元素的和

package main

import (

	"fmt"
)

type vector []int //别名不可少
//类型和作用在它上面定义的方法必须在同一个包里定义，这就是为什么不能直接绑定[]int的方法
//使用一个别名即可解决

func (v vector) addAll() int {

	sum := 0
	for i := range v {

		sum += v[i]
	}
	return sum
}


func main() {

	slice := vector{1, 3, 4}
	fmt.Println(slice.addAll())

}
```

## 函数和方法的区别

> 函数将变量作为参数Function(recv)
>
> 方法在变量上被调用recv.Method()
>
> **receiver_type** 叫做 **（接收者）基本类型**，这个类型必须在和方法同样的包中被声明

## 当结构体中的变量无法在其他包中导出

>  我们可以实现setter and getter方法，我们可以在其他包中引用该包，即可实现(类似java)

## 内嵌结构体上的方法可以继承

## 还有很多细节值得深究

# 接口(重点)

> 非传统的面向对象编程特性
>
> 接口定义了一组方法，但是这些方法不包含实现的代码，(类似java中的抽象类)。go中的接口里不能定义变量
>
> ```go
> //接口的格式
> type Namer interface {
>     Method1(param_list) return_type
>     Method2(param_list) return_type
>     ...
> }
> ```
>
> 接口一般是包含一到三个方法
>
> 细节：
>
> 类型不需要显示声明它实现了某个接口，接口被隐士地实现。多个类型可以实现同一个接口
>
> 一个类型也可以实现多个接口
>
> 只要类型实现了接口中的方法，他就实现了此接口
>
> 这些特性，使得接口有很大的灵活性

```go
//入门案例
//用接口实现求正方形的面积

package main

import (

	"fmt"

)


type Shaper interface {

	Area() float64 //求面积

}

type Square struct {

	side float64
}

func (s *Square) Area() float64 {

	return s.side * s.side
}
func main() {

	s := new(Square)
	s.side = 5

	areaS := Shaper(s) //调用接口
	fmt.Println(areaS.Area())
}
```

```go
//多态

package main

import (

	"fmt"

)
type Shaper interface {

	Area() float64 //求面积

}

type Square struct {

	side float64
}

type Retangle struct {

	length, width float64
}

func (s *Square) Area() float64 {

	return s.side * s.side
}

func (r *Retangle) Area() float64 {

	return r.length * r.width
}

func main() {

	s := new(Square)
	s.side = 5
	r := new(Retangle)
	r.length = 5
	r.width = 3
	
	//也可以定义一个Shaper切片保存这两个Shaper类型
	areaS := Shaper(s) //调用接口
	areaR := Shaper(r)
    
    //表现出不同的行为
	fmt.Println(areaS.Area())
	fmt.Println(areaR.Area())
}
```

```go
//定义一个函数，将接口作为函数的参数。所有实现这些接口的类型都可以使用这个函数
//实现租车费用的一个过程

package main

import (

	"fmt"
)

// Car类

type Car struct {

	Type string
	vehicleld string
	PerRant float64
	days int
	
}


// 客车类
type Bus struct {

	Type string
	vehicleld string
	PerRant float64
	days int
}

func (c *Car) calRent() float64 {

	return float64(c.PerRant * float64(c.days))
} 

func (b *Bus) calRent() float64 {

	return float64(b.PerRant * float64(b.days))
}

func (c *Car) getType() string {

	return c.Type
}
//定义接口

type RentVehicle interface {


	calRent() float64
	
}

//使用接口类型作为函数的参数，所有实现了接口的类型都可以用这个函数
func showRant(r RentVehicle) {

	fmt.Println(r.calRent())
}


func main() {

	car := &Car{"x6", "6666666", 1000, 2}
	bus := &Bus{"jinglong", "88888888", 2000, 2}
	
	shaper := []RentVehicle{car, bus}
		
	
	for i := range shaper {
				
		
		showRant(shaper[i])
	
	}	
		
}
```

## 应用接口(以标准库sort为例子)

```go
//sort包中的一个接口类型
type Interface interface {
	// Len is the number of elements in the collection.
	Len() int
	// Less reports whether the element with
	// index i should sort before the element with index j.
	Less(i, j int) bool
	// Swap swaps the elements with indexes i and j.
	Swap(i, j int)
}

//只要实现了这三个方法就可以实现这个接口
//IntSlice类型实现了这三个方法
type IntSlice []int

func (p IntSlice) Len() int           { return len(p) }
func (p IntSlice) Less(i, j int) bool { return p[i] < p[j] }
func (p IntSlice) Swap(i, j int)      { p[i], p[j] = p[j], p[i] }

//用代码实现
package main

import (
	"fmt"
	"sort"
)

func main() {
	//sort 包中的IntSlice类型实现了接口
	slice := sort.IntSlice{2, 3, 1, 6, 5}
	//在Sort方法中调用了Sort函数，将IntSlice类型传入Sort函数中，可以调用Less,Swap等函数，实现排序算法
	slice.Sort()
	fmt.Println(slice)
}

```

# 接口嵌套接口

一个接口可以包含一个或多个其他的接口，这相当于直接将这些内嵌接口的方法列举在外层接口中一样。

比如接口 `File` 包含了 `ReadWrite` 和 `Lock` 的所有方法，它还额外有一个 `Close()` 方法。

```go
type ReadWrite interface {
    Read(b Buffer) bool
    Write(b Buffer) bool
}

type Lock interface {
    Lock()
    Unlock()
}

type File interface {
    ReadWrite
    Lock
    Close()
}
```

# 空接口

> 空接口或者最小接口不包含任何方法，它对实现不做任何要求，
>
> ```go
> type Any interface{}
> ```
>
> 可以给空接口类型的变量赋予任何类型的值

