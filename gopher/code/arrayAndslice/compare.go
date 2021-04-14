package main

import "fmt"

func main() {
	a1 := [3]int{1, 2, 3}
	a2 := [3]int{1, 2, 3}
	if a1 == a2 {
		fmt.Println(true)
	}

	s1 := []int{1, 2, 3}
	s2 := []int{1, 2, 3}
	fmt.Printf("%p\n", s1)
	fmt.Printf("%p\n", s2)
}
