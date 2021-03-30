package main

import (
	"fmt"
)

type Stack []int

func main() {
	stack := make(Stack, 0)
	fmt.Println(stack.length())
	//push
	stack.push(3)

	//是否为空
	fmt.Println(stack.isEmpty())

	stack.pop()
}

//栈的长度
func (s Stack) length() int {
	return len(s)
}

//判断栈是否为空,为空返回1,否则返回0
func (s Stack) isEmpty() bool {
	if len(s) == 0 {
		return true
	}
	return false
}

//push
func (s *Stack) push(value int) {
	*s = append(*s, value)
}

//pop
//有问题！
func (s *Stack) pop() {
	fmt.Println()
}