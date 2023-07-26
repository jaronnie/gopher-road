package main

import (
	"fmt"

	"github.com/samber/lo"
)

func main() {
	even := lo.Filter([]int{1, 2, 3, 4}, func(x int, index int) bool {
		return x%2 == 0
	})
	fmt.Println(even)
}
