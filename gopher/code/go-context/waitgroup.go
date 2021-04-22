package main

import "fmt"

func main() {
	setZeroes([][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}})
}

func setZeroes(matrix [][]int) {
	m, n := len(matrix), len(matrix[0])
	res := make([][]int, len(matrix))
	for i, _ := range matrix {
		res[i] = make([]int, n)
	}
	for i := 0; i < m; i++  {
		copy(res[i], matrix[i])
	}
	for i, v1 := range matrix {
		for j, _ := range v1 {
			if matrix[i][j] == 0 {
				for x := 0; x < n; x++ {
					res[i][x] = 0
				}
				for x := 0; x < m; x++ {
					res[x][j] = 0
				}
			}
		}
	}
	matrix = res
	fmt.Println(matrix)
}