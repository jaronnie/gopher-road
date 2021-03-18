package main

import "fmt"

func main() {
	fmt.Println(isValid("()"))
}

func isValid(s string) bool {

	if len(s) % 2 == 1 {
		return false
	}
	if len(s) == 0 {
		return true
	}

	var stack []string
	for _, v := range s {
		if string(v) == "(" {
			stack = append(stack, ")")
		} else if string(v) == "[" {
			stack = append(stack, "]")
		} else if string(v) == "{" {
			stack = append(stack, "}")
		} else {
			if len(stack) == 0 {
				return false
			}
			if stack[len(stack)-1] != string(v) {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}