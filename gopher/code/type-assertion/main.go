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
