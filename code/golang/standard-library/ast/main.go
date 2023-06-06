package main

import (
	"fmt"
	"go/parser"
	"go/token"
	"os"
)

var (
	template = `package template

type T struct {}
`
)

func main() {
	fset := token.NewFileSet()
	_ = os.WriteFile("gen.go", []byte(template), 0o644)
	f, err := parser.ParseFile(fset, "gen.go", nil, 0o644)
	if err != nil {
		panic(err)
	}
	defer os.Remove("gen.go")
	for _, v := range f.Decls {
		fmt.Printf("%#v", v)
	}
}
