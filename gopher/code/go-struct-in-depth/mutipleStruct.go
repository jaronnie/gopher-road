package main

import "fmt"

type A struct {

	ax, ay int
}

type B struct {

	A
	ax, ay float32
}

func main() {

	b := B{A{1, 2}, 3.0, 4.0}
	fmt.Println(b.A.ax, b.A.ay, b.ax, b.ay)
	fmt.Println(b.A)
}
