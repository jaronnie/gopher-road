package main

import (

	"fmt"
)

//将数组传递给函数，并通过函数计算数组中所有元素的和


func sumArray(array *[5]int) (sum int) {
	
	array[4] = 6
	
	for _, value := range array {
		sum += value
	}

	return sum
	
}

func main() {

	array := [5]int{1, 2, 3, 4, 5}

	var sum1 = 0

	for i := 0; i < len(array); i++ {
		sum1 += array[i]
	}

	fmt.Println(sum1)
	sum2 := sumArray(&array)
	fmt.Println(sum2)
	
}
