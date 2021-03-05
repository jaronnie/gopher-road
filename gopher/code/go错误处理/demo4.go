package main

import (
    "fmt"
    "os"
)

var user = os.Getenv("USER") 

func init() {


    if user != "jay" {

        panic("not this user")
    }
}

func main(){
 
    fmt.Println("welcome jay")



}

