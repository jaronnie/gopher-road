package main

import (

    "fmt"
    "errors"
)

func main(){
    
    x := -1

    if x < 0 {
        fmt.Println("Error:", errors.New("x < 0"))
    }
    fmt.Println("program continue")
}

