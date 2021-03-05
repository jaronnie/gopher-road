//实现租车费用的一个过程

package main

import (

	"fmt"
)

// Car类

type Car struct {

	Type string
	vehicleld string
	PerRant float64
	days int
	
}


// 客车类
type Bus struct {

	Type string
	vehicleld string
	PerRant float64
	days int
}

func (c *Car) calRent() float64 {

	return float64(c.PerRant * float64(c.days))
} 

func (b *Bus) calRent() float64 {

	return float64(b.PerRant * float64(b.days))
}

func (c *Car) getType() string {

	return c.Type
}
//定义接口

type RentVehicle interface {


	calRent() float64
	
}

//使用接口类型作为函数的参数，所有实现了接口的类型都可以用这个函数
func showRant(r RentVehicle) {

	fmt.Println(r.calRent())
}


func main() {

	car := &Car{"x6", "6666666", 1000, 2}
	bus := &Bus{"jinglong", "88888888", 2000, 2}
	
	shaper := []RentVehicle{car, bus}
		
	
	for i := range shaper {
				
		
		showRant(shaper[i])
	
	}	
		
}
