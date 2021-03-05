package main

import (

	"fmt"
	
)

type Square struct {

	r float32

}


type Retangle struct {

	h float32

	*Square

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
