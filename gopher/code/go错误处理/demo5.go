package main

import "fmt"


func bad() {

    panic("bad error")
}

func test() {


    defer func() {

        
        if e := recover(); e != nil {
            
            fmt.Printf("Panicing %s\n", e)
        }
    } ()
    bad()

}

func main(){

    fmt.Println("start program")
    test()
    fmt.Println("end program")
}

