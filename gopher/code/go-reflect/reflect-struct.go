package main

import (

	"fmt"
	"reflect"

)

type linkString struct {


	S1, s2, s3 string
}

func (l linkString) String() string {


	return l.S1 + "-" + l.s2 + "-" + l.s3
}

func (l linkString) StringTo() string {


	return l.S1 + "--" + l.s2 + "--" + l.s3
}

func main() {

	var s interface{} = linkString{"I", "Love", "Go"} //空接口类型
	
	RfVal := reflect.ValueOf(s)
	//fmt.Printf("%T\n", RfTp)
	
	for i := 0; i < RfVal.NumField(); i++ {
	
		fmt.Println(RfVal.Field(i))
	
	}
	
	fmt.Println(RfVal.Method(0).Call(nil))
	fmt.Println(RfVal.Method(1).Call(nil))
	
	RfVal.Field(0).SetString("i")


}
