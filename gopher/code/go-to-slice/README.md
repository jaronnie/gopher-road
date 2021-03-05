# go-to-slice
## slice小实例(动态增加长度)

```go
package main

import "fmt"

func main() {

        slice := make([]int, 0, 10)
    	fmt.Println(slice)
        for i := 0; i < cap(slice); i++ { //不能超出容量
                slice = slice[0:i+1]
                slice[i] = i
                fmt.Printf("The length of slice %d      ", len(slice))
                fmt.Println(slice)
        }
}
//运行结果
[]
The length of slice 1	[0]
The length of slice 2	[0 1]
The length of slice 3	[0 1 2]
The length of slice 4	[0 1 2 3]
The length of slice 5	[0 1 2 3 4]
The length of slice 6	[0 1 2 3 4 5]
The length of slice 7	[0 1 2 3 4 5 6]
The length of slice 8	[0 1 2 3 4 5 6 7]
The length of slice 9	[0 1 2 3 4 5 6 7 8]
The length of slice 10	[0 1 2 3 4 5 6 7 8 9]
```

## 切片的复制与追加(扩容)

> 使用自建函数
>
> copy()  返回被复制的元素数量
>
> > 内建函数copy将元素从来源切片复制到目标切片中，也能将字节从字符串复制到字节切片中。copy返回被复制的元素数量，它会是 len(src) 和 len(dst) 中较小的那个。来源和目标的底层内存可以重叠。
>
> append() 返回被更新后的切片
>
> > 内建函数append将元素追加到切片的末尾。若它有足够的容量，其目标就会重新切片以容纳新的元素。否则，就会分配一个新的基本数组。append返回更新后的切片，因此必须存储追加后的结果。

```go
package main

import "fmt"

func main() {
        slSrc := []int{1, 2, 3, 4, 5}
        slDst := make([]int, 5)
        num := copy(slDst, slSrc)
        fmt.Println(slDst)
        fmt.Println(num)

        slAppend := append(slDst, 6, 7, 8) //扩容
        fmt.Println(slAppend)
}
//运行结果
[1 2 3 4 5]
5
[1 2 3 4 5 6 7 8]
```

