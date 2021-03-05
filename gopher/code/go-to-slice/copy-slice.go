package main

import "fmt"

func main() {
	slSrc := []int{1, 2, 3, 4, 5}
	slDst := make([]int, 5)
	num := copy(slDst, slSrc)
	fmt.Println(slDst)
	fmt.Println(num)

	slAppend := append(slDst, 6, 7, 8)
	fmt.Println(slAppend)
}
