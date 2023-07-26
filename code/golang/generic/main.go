package main

import (
	"cmp"
	"fmt"
)

type Ordered interface {
	~int | ~int8 | ~int16 | ~int32 |
		~string
}

func Min[T cmp.Ordered](a, b T) T {
	if a >= b {
		return b
	}
	return a
}

func Max[T Ordered](a, b T) T {
	if a >= b {
		return a
	}
	return b
}

func Equal[T comparable](a, b T) bool {
	return a == b
}

func NotEqual[T comparable](a, b T) bool {
	return a != b
}

func main() {
	fmt.Printf("Min(1, 1): %v\n", Min(1, 1))
	fmt.Printf("Equal(1, 2): %v\n", Equal(1, 2))
	fmt.Printf("NotEqual(\"a\", \"a\"): %v\n", NotEqual("a", "a"))
	fmt.Printf("Max(9, 10): %v\n", Max(9, 10))
}
