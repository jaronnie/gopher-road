package main

import (

    "fmt"
)

func ReturnSumTwoOfIndex(nums [4]int, target int) (x, y int) {

    for i := 0; i < len(nums); i++ {

        for j := 1; i < len(nums) - 1; i++ {

            if nums[i] + nums[j] == target {

                return i, j

            }
        }
    }

    return 0, 0

}


func main() {


    nums := [4]int{2, 7, 11, 15}

    i, j := ReturnSumTwoOfIndex(nums, 10)

    fmt.Println(i, j)


}
