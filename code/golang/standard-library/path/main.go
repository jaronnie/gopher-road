package main

import (
	"fmt"
	"path/filepath"
)

func main() {
	join := filepath.Join("config", "1", "2")
	fmt.Println(join)
}
