package main

import (
	"errors"
	"fmt"
)

//栈接口
type Stack interface {
	Push(v int) //栈顶添加
	Pop() (error, int) //弹出栈顶元素
	Peek() (error, int) //返回栈顶元素，不弹出
	Empty() bool //是否为空
	Clear() //清除栈内所有元素
	Length() int //栈大小
}

//ArrayStack
type ArrayStack []int


//node节点
type Node struct {
	Value int
	Next *Node
}

//LinkedStack
type LinkedStack struct {
	Head *Node
	Size int
}

func main() {
	//arrayStack := NewArrayStack()
	//arrayStack.Push(1)
	//err, peek := arrayStack.Peek()
	//if err != nil {
	//	fmt.Println(err)
	//}
	//fmt.Println(peek)
	//arrayStack.Clear()
	//fmt.Println("clear:")
	//fmt.Println(arrayStack.Empty())
	//fmt.Println(arrayStack.Length())
	linkedStack := NewLinkedStack()
	linkedStack.Push(1)
	linkedStack.Push(2)
	fmt.Println(linkedStack.Peek())
	fmt.Println(linkedStack.Length())
	err, pop := linkedStack.Pop()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(pop)
	err, peek := linkedStack.Peek()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(peek)
	linkedStack.Clear()
	fmt.Println(linkedStack)
	err, peek = linkedStack.Peek()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(peek)
}

//New ArrayStack
func NewArrayStack() Stack {
	return &ArrayStack{}
}

//New LinkedStack
func NewLinkedStack() Stack {
	return &LinkedStack{
		Head: &Node{},
	}
}

func (s *ArrayStack) Push(v int) {
	*s = append(*s, v)
}

func (s *LinkedStack) Push(v int) {
	node := s.Head.Next
	s.Head.Next = &Node{
		Value: v,
		Next: node,
	}
	s.Size++
}

func (s *ArrayStack) Pop() (error, int) {
	if len(*s) == 0 {
		return errors.New("empty stack"), -1
	}
	var pop int
	pop = (*s)[len(*s)-1]
	*s = (*s)[:len(*s)-1]
	return nil, pop
}

func (s *LinkedStack) Pop() (error, int) {
	if s.Size == 0 {
		return errors.New("empty stack"), -1
	}
	pop := s.Head.Next
	s.Head.Next = pop.Next
	s.Size--
	return nil, pop.Value
}

func (s ArrayStack) Peek() (error, int) {
	if len(s) == 0 {
		return errors.New("empty stack"), -1
	}
	return nil, s[len(s)-1]
}

func (s *LinkedStack) Peek() (error, int) {
	if s.Head.Next == nil {
		return errors.New("empty stack"), -1
	}
	return nil, s.Head.Next.Value
}

func (s ArrayStack) Empty() bool {
	return len(s) == 0
}

func (s *LinkedStack) Empty() bool {
	return s.Head.Next == nil
}

func (s *ArrayStack) Clear() {
	*s = (*s)[len(*s):]
}

func (s *LinkedStack) Clear() {
	s.Size = 0
	s.Head.Next = nil
}

func (s ArrayStack) Length() int {
	return len(s)
}

func (s *LinkedStack) Length() int {
	return s.Size
}
