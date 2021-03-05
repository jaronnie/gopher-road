package main

import (
   "encoding/json"
    "os"
)

type Student struct {

    Name string `json:"name"`
    
    Age int `json:"age"`
    
    Score float32 `json:"score"`
    
}

func main(){

    stu := Student {
        Name: "nj-jay",
        Age: 20,
        Score: 99.0,
     }
    fp, _ := os.OpenFile("hello.json", os.O_WRONLY | os.O_CREATE, 0666)

    defer fp.Close()

    enc := json.NewEncoder(fp)

    _ = enc.Encode(stu)

}

