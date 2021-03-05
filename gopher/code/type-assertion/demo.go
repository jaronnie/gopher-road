package main

import (

	"fmt"
)

//声明一个电脑Usb接口
type Usb interface {

	//声明两个方法
	Start()
	Stop()
}

//声明computer类
type Computer struct {
	
}

//声明phone类
type Phone struct {
	
}

//声明camera类
type Camera struct {

}


//绑定方法，实现接口
func (p *Phone) Start() {
	fmt.Println("手机开始工作!")
}

func (p *Phone) Stop() {
	fmt.Println("手机停止工作!")
}


//Phone类特有的方法
func (p *Phone) Call() {

	fmt.Println("手机开始通话!")
}

func (c *Camera) Start() {
	fmt.Println("摄像机开始工作!")
}

func (c *Camera) Stop() {
	fmt.Println("摄像机停止工作!")
}


func (c *Computer) Working(u Usb) {
	
	u.Start()
	if phone, ok := u.(*Phone); ok {

		phone.Call()
	}
	u.Stop()
}

func main() {
	
	computer := new(Computer)
	phone := new(Phone)
	camera := new(Camera)
	computer.Working(phone)
	computer.Working(camera)
	
}
