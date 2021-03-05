

# go实现接口继承

> 当一个类型包含（内嵌）另一个类型（实现了一个或多个接口）的指针时，这个类型就可以使用（另一个类型）所有的接口方法。
>

```go
package main

import (

	"fmt"
	
)

type Square struct {

	r float32

}


type Retangle struct {

	h float32

	*Square //*******Retangle继承了Square的接口

}

func (s Square) Area() {

	fmt.Println(s.r * s.r)

}

type shape interface {

	Area()

}

func computeArea(c shape) {

	c.Area()
}

func main() {

	s := Square{5}
	r := Retangle{2, &Square{3}}
	computeArea(s)
	computeArea(r)
}
```

