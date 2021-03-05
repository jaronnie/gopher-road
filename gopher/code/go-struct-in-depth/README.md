# struct高级用法

## 带标签的结构体

> struct的每个字段上，可以写上一个tag
>
> 该tag可以通过反射机制获取
>
> 常见的使用场景就是序列化与反序列化

```go
//入门案例
package main

import (

	"fmt"
	"reflect"
)

type TagType struct { // tags

	field1 bool   "An important answer"
	
	field2 string "The name of the thing"
	
	field3 int    "How much there are"
}

func main() {

	tt := TagType{true, "Barak Obama", 1}
	
	for i := 0; i < 3; i++ {
	
		refTag(tt, i)
		
	}
}

func refTag(tt TagType, ix int) {

	ttType := reflect.TypeOf(tt)
	
	ixField := ttType.Field(ix)
	
	fmt.Printf("%v\n", ixField.Tag)
	
}
```

```go
//实际应用 处理json
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
//运行结果
{"name":"nj-jay","number":201801022,"score":99}
```

## 内嵌结构体

> 类似继承

```go
package main

import "fmt"

type A struct {

	ax, ay int
}

type B struct {

	A   //简洁
	ax, ay float32
}

func main() {

	b := B{A{1, 2}, 3.0, 4.0}
	fmt.Println(b.A.ax, b.A.ay, b.ax, b.ay)
	fmt.Println(b.A)
}
```

