package main

import (
	"fmt"
	"github.com/njnj-gif/mysort/sort"
)

func main() {

	data := []int{74, 59, 238, -784, 9845, 959, 905, 0, 0, 42, 7586, -5467984, 7586}
	a := sort.IntSlice(data) //conversion to type IntArray
	sort.Sort(a)
	fmt.Println(a)

}
