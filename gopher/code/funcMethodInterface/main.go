package main

import (
	"./test1"
	"./test2"
	"fmt"
)
type Car test2.Car
type Shaper test1.Shaper

func main() {


	car := &Car{"x6", 100, 2}
	s := Shaper(car)



	fmt.Println(test2.ShowRant(s))


}

