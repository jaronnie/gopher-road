package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "314159\n"
	fmt.Println(s)
	s = strings.TrimRight(s, "\n")
	fmt.Println(s)
}
