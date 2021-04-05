package main

import "fmt"

type Animal interface {
	eat() string
	setFood(food string)
}

type Cat struct {
	food string
}

func (s Cat) eat() string {
	return s.food
}

func (s Cat) setFood(food string) {
	s.food = food
}

type Dog struct {
	food string
}

func (s *Dog) eat() string {
	return s.food
}

func (s *Dog) setFood(food string) {
	s.food = food
}

func main() {
	var cat Animal = Cat{"fish"}
	fmt.Println(cat.eat())
	cat.setFood("鱼儿")
	fmt.Println(cat.eat())
	fmt.Println("===================================")
	var dog Animal = &Dog{"shit"}
	fmt.Println(dog.eat())
	dog.setFood("屎壳郎")
	fmt.Println(dog.eat())
}
