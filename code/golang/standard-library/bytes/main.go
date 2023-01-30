package main

import (
	"bytes"
	"fmt"
)

func main() {
	b := []byte("314159\n")
	b = bytes.TrimRight(b, "\\n")
	fmt.Println(string(b))
}
