package main

import (

	"fmt"
	"encoding/json"

)

type Student struct {


	Name string `json:"name"`
	
	Number int `json:"number"`
	
	Score float32 `json:"score"`
	
}

func main() {

	s1 := Student{"nj-jay", 201801022, 99}
	
	jsonStr, _ := json.Marshal(s1) //json序列化
	
	fmt.Println(string(jsonStr)) //打印json格式 由于变量名是大写，使用tag标签,变成小写
	
}

