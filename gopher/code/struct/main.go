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
