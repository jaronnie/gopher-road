package main

import (

	"fmt"

)

func main() {


	var i int
	//var f float32
	//var s string
	fmt.Println("请输入一个整数")
	_, err := fmt.Scanf("%d\n", &i)
	
	if  err != nil {
	
		fmt.Println("请输入一个整数!!!")
	} else {
	
		fmt.Println(i)
	}
	
}
