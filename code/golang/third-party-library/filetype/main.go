package main

import (
	"fmt"
	"github.com/h2non/filetype"
	"os"
)

func main() {
	file, err := os.ReadFile("")
	if err != nil {
		panic(err)
	}
	match, err := filetype.Match(file)
	if err != nil {
		panic(err)
	}
	fmt.Println(match.Extension)
}
