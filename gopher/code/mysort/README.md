# 动手写一个sort包(利用接口实现对整数切片的排序并在测试函数中写一个结构体的排序)

```go
//自定义的包
package sort
//接口
type Sorter interface {

	Len() int
	Less(i, j int) bool
	Swap(i, j int)

}

type IntSlice []int

//绑定方法，实现InsSlice的接口
func (p IntSlice) Len() int {

	return len(p)
}

func (p IntSlice) Less(i, j int) bool {

	return p[i] < p[j]
}

func (p IntSlice)Swap(i, j int) {


	p[i], p[j] = p[j], p[i]
}

//排序
func Sort(data Sorter) {

	for pass := 1; pass < data.Len(); pass++ {

		for i := 0; i < data.Len() - pass; i++ {

			if data.Less(i+1, i) {

				data.Swap(i, i+1)
			}
		}
	}
}

//convenience

func Ints(a []int) {

	Sort(IntSlice(a)) //a转成IntSlice, a实现了接口，可以调用Len, Less, Swap方法，即完成了排序
}
```

```go
//测试文件
package main

import (
	"fmt"
	"github.com/njnj-gif/mysort/sort"
)

func main() {

	data := []int{74, 59, 238, -784, 9845, 959, 905, 0, 0, 42, 7586, -5467984, 7586}
	a := sort.IntSlice(data) //conversion to type IntArray
	sort.Sort(a)
	fmt.Println(a)

	fmt.Println("============")

	slice := []int{1, 4, 3, 9, 8}
	sort.Ints(slice)
	fmt.Println(slice)
}
```

