# go数组与切片

## 数组

> go中的数组是一种值类型(不像C/C++中是指向首元素的指针)
>
> 也可通过new来创建
>
> 注：
>
> new(内建函数)一般用来分配值类型的内存，返回的是指向该类型内存地址的指针

```go
//声明
var array [10]int //默认值10个零

//使用new创建数组,返回一个指向数组内存地址的指针
var array1 = new([5]int)

//赋值方式
var array2 = [5]int{1, 2, 3, 4, 5}

//或者使用一种独特的语法糖
var array3 = [...]int{1, 2, 3, 4, 5}

//也可以通过key-value方式赋值
array4 := [5]int{3:3, 4:4} // --> [0 0 0 3 4]

//求数组长度
len(array)

//遍历数组 使用for循环或者for-range循环
for i:= 0; i < len(array); i++ {
    
}

for index, value := range array {
    //index是序号
    //value是值
}
```

## 将数组传递给函数

> 把一个大数组传递给函数会消耗很多内存
>
> 有两种方法可以避免这种现象
>
> * 传递数组的指针
> * 使用数组的切片(稍后会谈到)
>
> 在此段中写写怎么用传递数组的指针的方法实现将数组传递给函数

```go
package main

import (

	"fmt"
)

//将数组传递给函数，并通过函数计算数组中所有元素的和
func sumArray(array *[5]int) (sum int) {
	
	array[4] = 6
	
	for _, value := range array {
		sum += value
	}
    
	return sum
}

func main() {

	array := [5]int{1, 2, 3, 4, 5}

	var sum1 = 0

	for i := 0; i < len(array); i++ {
		sum1 += array[i]
	}

	fmt.Println(sum1)
	sum2 := sumArray(&array)
	fmt.Println(sum2)
}

//运行结果
15
16
```

## 切片

>切片是对数组的一个连续片段的引用。切片是一个引用类型，跟python中的list类型有点类似
>
>因此可使用make来创建
>
>切片是一个长度可变的数组
>
>在Go中切片使用的更多
>
>切片的内存分布
>
>* ptr 指向第一个元素
>* len 保存长度信息
>* cap 保存容量信息
>
>![](https://picture.nj-jay.com/7.2_fig7.2.png)

```go
//用数组创建切片
array := [6]int{1, 2, 3, 4, 5, 6}
slice := array[2:5] // 截取第二个元素到第四个元素-->[3, 4, 5]

//直接创建切片
slice := []int{1, 2, 3, 4, 5, 6}

//使用make创建切片
makeSlice := make([]int, 10, 10) //长度为10，容量为10
```

```go
//验证slice的地址与首元素的地址相同
package main
import "fmt"
func main() {
	//用数组创建切片
	slice := []int{1, 2, 3, 4, 5}
	fmt.Println(slice)
	fmt.Printf("%p\n", slice) //slice 本身就是一个指针
	fmt.Printf("%p\n", &slice[0])
}
//运行结果
[1 2 3 4 5]
0xc0000b2030
0xc0000b2030
```

## new()和make()的区别

> 都在堆上分配内存，但是他们的行为不同，适用于不同的类型
>
> * new(T) 为每个新的类型T分配一片内存，初始化为 0 并且返回类型为\*T的内存地址：这种方法 **返回一个指向类型为 T，值为 0 的地址的指针**，它适用于值类型如数组和结构体；它相当于 `&T{}`。
> * make(T) **返回一个类型为 T 的初始值**，它只适用于3种内建的引用类型：切片、map 和 channel