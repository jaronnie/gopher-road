package main

import (

	"fmt"
)	

func isSame(any... interface{}) bool {

		
	return any[0] == any[1]
	
} 


func main() {

	fmt.Println(isSame('a', 'a'))
	fmt.Println(isSame(1, 3))

}
