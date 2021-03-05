
package main

import (

	"fmt"
)


func TypeJudge(items... interface{}) {


	for index, t := range items {
		
		switch t.(type) {

		case int, int32, int64 :

			fmt.Println(index, "int/int32/int64类型")

		case float32, float64 :
			fmt.Println(index, "float32/float64类型")
		
		case string :
			fmt.Println(index, "string类型")
		case []int :
			fmt.Println(index, "[]int类型")
		default :
			fmt.Println(index, "unknown")
		}
		

	} 
}

func main() {

	TypeJudge("nj", []int{1, 3, 4}, 3222, []float32{1.1, 3.2}, 530.0)

}
