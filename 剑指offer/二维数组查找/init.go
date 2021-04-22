package main

import "fmt"

func main() {
	hIndex([]int{1, 3, 1})
}
func hIndex(citations []int) {
	maps := make(map[int]int)
	m, n := 0, len(citations)
	for i := 0; i < n; i++ {
		if citations[i] > citations[m] {
			maps[citations[i]] += 1
		}
	}
	fmt.Println(maps)
}