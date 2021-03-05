package main

import "fmt"

func main() {

	//用数组创建切片
	slice := []int{1, 2, 3, 4, 5}
	fmt.Println(slice)
	fmt.Printf("%p\n", slice)
	fmt.Printf("%p\n", &slice[0])
}
