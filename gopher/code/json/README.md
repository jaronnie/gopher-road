# go处理json

json常常被用于Web后端和浏览器之间的通讯

## 基本用法

```go
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
      
    stu := Student {
        Name: "nj-jay",
        Age: 20,
        Score: 99.0,
     }
     stu_json, _ :=json.Marshal(stu)
     fmt.Println(string(stu_json))
 }

```

## 将json保存到文件中

> json包中提供了函数func NewEncoder(w io.Writer) *Encoder
>
> NewEncoder创建一个将数据写入w的*Encoder。
>
> func (enc *Encoder) Encode(v interface{}) error
>
> Encode将v的json编码写入输出流，并会写入一个换行符.

```go
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
```

## 反序列化

`UnMarshal()` 的函数签名是 `func Unmarshal(data []byte, v interface{}) error` 把 JSON 解码为数据结构。

json 包使用 `map[string]interface{}` 和 `[]interface{}` 储存任意的 JSON 对象和数组；其可以被反序列化为任何的 JSON blob 存储到接口值中。

```go
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

```

