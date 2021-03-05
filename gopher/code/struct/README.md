# go struct

```go
//格式
type identifier struct {
    
    field1 type1
    field2 type2
} 

//使用new创建
//使用 new 函数给一个新的结构体变量分配内存，它返回指向已分配内存的指针：var t *T = new(T)
//常用方法是 t := new(T)
```

```go
//案例
package main

import (

	"fmt"
	"strings"

)

type Student struct {


	Name string
	Num int
	Score float32
}

//给结构体绑定方法或者将结构体作为参数

//绑定方法
func (s *Student) SetNameUpper() string {
	
	return strings.ToUpper((*s).Name)
	
}

//将结构体作为函数的参数
func SetScore(s *Student, f float32) {

	(*s).Score = f 
	//s.Score也行，自动解引用
}



func main() {

	s1 := new(Student) //引用类型
	s1.Name = "nj-jay"
	(*s1).Num = 201801022
	(*s1).Score = 99 //自动解值不加*也可以。实际上是要加的
	fmt.Println("姓名:", (*s1).Name)
	fmt.Println("学号:", (*s1).Num)
	fmt.Println("分数:", (*s1).Score)
	
	fmt.Println("============")
	s2 := &Student{"blog", 201801036, 90}
	fmt.Println("姓名:", (*s2).Name)
	fmt.Println("学号:", (*s2).Num)
	fmt.Println("分数:", (*s2).Score)
	
	fmt.Println("============")
	
	var s3 Student
	s3 = Student{"shell", 20180022, 95}
	fmt.Println("姓名:", s3.Name)
	fmt.Println("学号:", s3.Num)
	fmt.Println("分数:", s3.Score)
	
	//测试方法
	fmt.Println("=======测试方法=====")
	fmt.Println("SetNameUpper for s1:", (*s1).SetNameUpper())
	//测试函数
	fmt.Println("=======测试函数=====")
	SetScore(s1, 66)
	fmt.Println("SetScore for s1:", (*s1).Score)
	SetScore(&s3, 55) //使用&取地址
	fmt.Println("SetScore for s3:", s3.Score)

}
//运行结果
姓名: nj-jay
学号: 201801022
分数: 99
============
姓名: blog
学号: 201801036
分数: 90
============
姓名: shell
学号: 20180022
分数: 95
=======测试方法=====
SetNameUpper for s1: NJ-JAY
=======测试函数=====
SetScore for s1: 66
SetScore for s3: 55
```

# 工厂模式(类似java中的Getter and Setter)

```go
package student

type Student struct {

	name string
	score float32
}

func (s *Student) SetName(name string) {

	s.name = name
} 

func (s *Student) GetName() string {

	return s.name
}

func (s *Student) SetScore(score float32) {

	s.score = score
}

func (s *Student) GetScore() float32 {

	return s.score
}
```

```go
package main

import (

	"fmt"
	"github.com/njnj-gif/myStruct/student"
)

type Stu = student.Student
//x type Stu student.Student x

func main() {

	s := new(Stu)
	s.SetName("nj-jay")
	s.SetScore(99)
	fmt.Println(s.GetName())
	fmt.Println(s.GetScore())

}
//运行结果
nj-jay
99
```

