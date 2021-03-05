package main

import (


	"fmt"
)


func printInt(items... int) {

	for index, value := range items {

		fmt.Println(index, value)

	}
}

func main() {
	
	printInt(1, 2, 3)

}
