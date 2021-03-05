package main

import "fmt"

func main() {

	slice := make([]int, 0, 10)
	fmt.Println(slice)
	for i := 0; i < cap(slice); i++ {
		slice = slice[0:i+1]
		slice[i] = i
		fmt.Printf("The length of slice %d	", len(slice))
		fmt.Println(slice)
	}
}
