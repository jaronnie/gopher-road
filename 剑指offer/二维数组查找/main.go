package main

import "fmt"

func main() {
	matrix := [][]int{{1, 4, 7, 11, 15},
		              {2, 5, 8, 12, 19},
		              {3, 6, 9, 16, 22},
		              {10, 13, 14, 17, 24},
		            }

	fmt.Println(PrintMatrixLikeSnake(matrix))

}
func PrintMatrixLikeSnake(matrix [][]int) []int {
	row, col := len(matrix), len(matrix[0])
	start := 0
	res := make([]int, 0)
	for row > 2 * start && col > 2 * start {
		endX := col - 1 - start
		endY := row - 1 - start
		//打印第一行
		for i := start; i <= endX; i++ {
			res = append(res, matrix[start][i])
		}

		//打印列
		for i := start + 1; i <= endY; i++ {
			res = append(res, matrix[i][endX])
		}

		//打印最下面一行
		for i := endX - 1; i >= start; i-- {
			res = append(res, matrix[endY][i])
		}

		//打印最左边一列
		for i := endY - 1; i >= start + 1; i-- {
			res = append(res, matrix[i][start])
		}

		start++
	}
	return res
}

