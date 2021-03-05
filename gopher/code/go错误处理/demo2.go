package main

import (
    "fmt"
    "errors"
    "math"
)

func Sqrt(f float64) (float64, error) {

    if f < 0 {

        return 0, errors.New("math - square root of negetive number")
    } else {

        return math.Sqrt(f), nil 
    }


}

func main(){

    f1, err := Sqrt(-1)
    if err != nil {

        fmt.Println(err)
    } else {
        fmt.Println(f1)
    }
}

