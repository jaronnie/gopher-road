package main

import (

    "fmt"
    "encoding/json"
)

type Student struct {

    Name string `json:"name"`
    Age int `json:"age"`
    Score float32 `json:"score"`
}

func main(){
    stu := Student{
        Name: "nj-jay",
        Age: 20,
        Score: 99.0,
    }
    stu_json, _ :=json.Marshal(stu)
    fmt.Println(string(stu_json))
}

