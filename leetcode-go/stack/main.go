package main

import (
	"errors"
	"fmt"
)

type Stack []int

type ArrayStack struct {
	stack Stack
	size int //长度
}

type LinkedStack struct {
	Val int
	pop *LinkedStack
}

func main() {
	s := createStack()
	fmt.Println(s.isEmpty())
	fmt.Println(s.stack)
	s.push(1)
	fmt.Println(s.isEmpty())
	fmt.Println(s.stack)
	v, err := s.pop()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(v)
	fmt.Println(s.stack)
	fmt.Println(s.length())
}

func createStack() *ArrayStack {
	stack := make([]int, 0)
	return &ArrayStack{stack: stack, size: 0}
}

//栈的长度
func (s Stack) length() int {
	return len(s)
}

func (s ArrayStack) length() int {
	return s.size
}

//判断栈是否为空,为空返回1,否则返回0
func (s Stack) isEmpty() bool {
	if len(s) == 0 {
		return true
	}
	return false
}

func (s ArrayStack) isEmpty() bool {
	return s.size == 0
}

//push
func (s *Stack) push(value int) {
	*s = append(*s, value)
}

func (s *ArrayStack) push(value int) {
	s.stack = append(s.stack, value)
	s.size++
}

//返回pop, 新的栈，以及是否正常弹出
func (s Stack) pop() (int, Stack, error) {
	if len(s) == 0 {
		return 0, nil, errors.New("stack is empty, can not pop")
	}
	newStack := make(Stack, len(s))
	copy(newStack, s)
	fmt.Println(newStack)
	v := newStack[len(newStack)-1]
	newStack = newStack[:len(newStack)-1]
	return v, newStack, nil
}
func (s *ArrayStack) pop() (int, error) {
	if s.size == 0 {
		return -1, errors.New("empty, can not pop")
	}
	v := s.stack[s.size-1]
	s.stack = s.stack[:s.size-1]
	s.size--
	return v, nil
}