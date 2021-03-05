package main

import (

	"fmt"
)

type vector []int

func (v vector) addAll() int {

	sum := 0
	for i := range v {

		sum += v[i]
	}
	return sum
}


func main() {

	slice := vector{1, 3, 4}
	fmt.Println(slice.addAll())

}
