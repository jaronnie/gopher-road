package stack

import "errors"

type ArrayStack struct {
	Urls []string
	Size int
}

type LinkedStack struct{}

var emptyStack = errors.New("empty stack, can not pop")

func NewArrayStack() *ArrayStack {
	return &ArrayStack{Urls: make([]string, 0)}
}

func (as *ArrayStack) Pop() (error, string) {
	if as.Size == 0 {
		return emptyStack, ""
	}
	length := as.Size
	pop := as.Urls[length-1]
	as.Urls = as.Urls[:length-1]
	as.Size--
	return nil, pop
}

func (as *ArrayStack) Push(s string) {
	as.Urls = append(as.Urls, s)
	as.Size++
}

func (as *ArrayStack) Top() string {
	if as.Size == 0 {
		return ""
	}
	return as.Urls[as.Size-1]
}

func (as *ArrayStack) Length() int {
	return as.Size
}
