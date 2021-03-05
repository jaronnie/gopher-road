package main

import (

    "encoding/json"
    "io/ioutil"
    "fmt"
)

//反序列化

type Student struct {

    Name string `json:"name"`

    Age int `json:"age"`

    Score float32 `json:"score"`

}

func main(){
    
    stu := new(Student)
    buf, _ := ioutil.ReadFile("./hello.json")
    //fmt.Println(string(buf))
    _ = json.Unmarshal(buf, &stu)
    fmt.Println(*stu)
}

