package main

import "fmt"

func main() {
	s := []int{1, 2, 3, 4, 5, 6}
	change(s)
	fmt.Println(s)
}

func change(s []int) {
	s2 := make([]int, len(s))
	copy(s2, s)
	s2[0] = 7
}
