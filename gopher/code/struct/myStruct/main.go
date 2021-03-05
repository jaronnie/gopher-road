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
