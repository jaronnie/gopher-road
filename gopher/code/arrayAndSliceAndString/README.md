# 字符串、数组和切片的应用

## 修改字符串的某个字符

> go中的字符串值是不可改变的
>
> 现在有一个需求，需要将字符串"hello"改成"cello"

```go
package main

import "fmt"

func main()  {
   str := "hello"
   slice := []byte(str)  //转成字节切片byte = uint8
   slice[0] = 'c'
   fmt.Println(string(slice)) //输出的时候得转成字符串，因为字符串在go中其实是整型数组
}
```



# 搜索以及排序切片 

> 标准库sort提供了排序的函数
>
> 看官方文档

```go
//实现对切片的排序
package main
import (
	"fmt"
	"sort"
)
func main() {

	slice := []int{1, 3, 2, 0, -1, 8, 5}
	str := []string{"a", "b", "d", "c"}
	sort.Ints(slice)
	sort.Strings(str)
	fmt.Println(slice)
	fmt.Println(str)
}
//运行结果
[-1 0 1 2 3 5 8]
[a b c d]
```

```go
//在切片中搜索元素，并返回index
// sort.SearchInts(a []int, x int)
index := sort.SearchInts(slice, 1) //使用此函数要保证切片是升序排列的
```

```go
//配合append函数，可以实现切片的很多操作
//非常的方便
package main

import (
	"fmt"
)

func main()  {
	a := []int{1, 2, 3}
	b := []int{4, 5, 6}
	//将切片b追加到a
	a = append(a, b...)
	fmt.Println(a)
}
```

```go
//复制切片a到b切片上
//内建函数copy将元素从来源切片复制到目标切片中，也能将字节从字符串复制到字节切片中。copy返回被复制的元素数量，它会是 len(src) 和 len(dst) 中较小的那个。
a := []int{1, 2, 3}
b := make([]int, 3)
copy(b, a)
```

```go
//删除位于索引 i 的元素
a = append(a[:1], a[1+1:]...)
//切除切片 a 中从索引 i 至 j 位置的元素：
a = append(a[:i], a[j:]...)
//为切片 a 扩展 j 个元素长度
a = append(a, make([]T, j)...)
//等等

```

