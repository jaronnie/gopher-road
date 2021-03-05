
# go reflect

> 反射可以在运行时动态获取变量的各种信息，比如变量的类型，值
>
> 如果是结构体，还可以获取到结构体本身的信息(包括结构体的字段，方法)
>
> 通过反射，可以修改变量的值，可以调用相关联的方法

```go
//快速入门 对基本数据类型，struct, interface{}, reflect.Value进行反射的基本操作
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
```

## 通过反射来修改变量

> 当使用SetXXX方法来设置需要通过对应的指针来完成
>
> 这样才能改变传入的变量的值，同时需要使用到reflect.Value.Elem()方法

```go
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
//运行结果
修改s的Name和分数
{jay 99}
========
20
nj-jay
520.1314

```

## 反射实践

> fmt.Printf实现
>
> `func Printf(format string, args ... interface{}) (n int, err error)`
>
> Printf 中的 `...` 参数为空接口类型。Printf 使用反射包来解析这个参数列表。所以，Printf 能够知道它每个参数的类型。因此格式化字符串中只有%d而没有 %u 和 %ld，因为它知道这个参数是 unsigned 还是 long。这也是为什么 Print 和 Println 在没有格式字符串的情况下还能如此漂亮地输出。



