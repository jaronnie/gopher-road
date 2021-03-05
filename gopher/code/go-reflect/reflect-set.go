package main

import (
	
	"fmt"
	"reflect"

)

type Student struct {
	
	Name string

	Score float32

}

//通过反射来调用struct类型的方法
func (s Student) PrintStr() {

	fmt.Println("修改s的Name和分数")
}

func SetValue(any interface{}) {

	
	ReTp := reflect.ValueOf(any)	
	
	Ty := ReTp.Elem()
	
	i := Ty.Interface()
	
	switch i.(type) {

		
		case int, int32, int64 :
		
			Ty.SetInt(20)
			
		case string :
				
			Ty.SetString("nj-jay")
			
		case float32, float64 :

			Ty.SetFloat(520.1314)

		case Student :
			
			//fmt.Println("s.Name = ", Ty.Field(0))

			Ty.Method(0).Call(nil)
			Ty.Field(0).SetString("jay")
			
			Ty.Field(1).SetFloat(99)
			
			//fmt.Println("============")
		default :
		
			fmt.Println("dismatch")
	}	
	
	

	

	//fmt.Println(ReTp.Kind()) ptr类型
	//fmt.Println(Ty.Kind())   int类型
	//fmt.Printf("%T", Ty)
	
}

func main() {

	
	var num int
	
	var str string 
	
	var f1 float32 

	s := new(Student)
	
	//使用反射改变num的值
	SetValue(&num)
	SetValue(&str)
	SetValue(&f1)
	SetValue(s)

	fmt.Println(*s)
	fmt.Println("========")
	fmt.Println(num)
	fmt.Println(str)
	fmt.Println(f1)
	
}
