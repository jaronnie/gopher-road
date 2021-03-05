		package main

import (

	"reflect"
	"fmt"
)

type Student struct {

	Name string
	Score float32
}

func ConvertBasic(any interface{}) {
	
	//1.获取到reflect.Type
	RfTy := reflect.TypeOf(any) //通过反射获取传入参数的类型
	fmt.Println(RfTy)
	
	//2.获取到reflect.Value
	rVal := reflect.ValueOf(any)
	fmt.Printf("rVal, 值:%v, 类型:%T\n", rVal, rVal)
		
	//3.把reflect.Value转成普通的
	oVal := rVal.Int()
	fmt.Printf("oVal, 值:%v, 类型:%T\n", oVal, oVal)
	
	//4.将reflect.Value转成interface{}
	iV := rVal.Interface()
	
	//5.将interface{}通过类型断言转成需要的类型
	iVal := iV.(int) //只能转成int
	fmt.Println(iVal+1)


}

func ConvertStruct(any interface{}) {

	//1.获取到reflect.Type和Kind
	RfTy := reflect.TypeOf(any) //通过反射获取传入参数的类型
	RfKd := RfTy.Kind() //类别，常量
	fmt.Println(RfTy, RfKd)
	
	//2.获取到reflect.Value
	rVal := reflect.ValueOf(any)
	fmt.Printf("rVal, 值:%v, 类型:%T\n", rVal, rVal)
	
	//3.把reflect.Value转成Student类型
	iV := rVal.Interface()
	stu := iV.(Student)
	fmt.Printf("stu, 值:%v, 类型:%T\n", stu, stu)
	fmt.Println("stu.Name:", stu.Name)
}

func main() {

	num := 100
	s1 := Student{
	
		Name : "nj-jay",
		Score : 99,
	}
	ConvertBasic(num)
	fmt.Println("================")
	ConvertStruct(s1)
	
}
