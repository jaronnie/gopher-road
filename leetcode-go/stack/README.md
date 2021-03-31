# 栈

## 三种实现方式

### 切片

```go
package main

import (
	"errors"
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

	v, stack, _ := stack.pop()
	fmt.Println(v)
	fmt.Println(stack)
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
```

## ArrayStack

```go
package main

import (
	"fmt"
)

type Stack []int

type ArrayStack struct {
	stack Stack
	size int //长度
}

func main() {
	s := createStack()
	fmt.Println(s.isEmpty())
	fmt.Println(s.stack)
	s.push(1)
	fmt.Println(s.isEmpty())
	fmt.Println(s.stack)
	v := s.pop()
	fmt.Println(v)
	fmt.Println(s.stack)
	fmt.Println(s.length())
}

func createStack() *ArrayStack {
	stack := make([]int, 0)
	return &ArrayStack{stack: stack, size: 0}
}

func (s ArrayStack) length() int {
	return s.size
}

func (s ArrayStack) isEmpty() bool {
	return s.size == 0
}

func (s *ArrayStack) push(value int) {
	s.stack = append(s.stack, value)
	s.size++
}

func (s *ArrayStack) pop() int {
	v := s.stack[s.size-1]
	s.stack = s.stack[:s.size-1]
	s.size--
	return v
}
```
