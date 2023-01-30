package main

import (
	"fmt"
	"math"

	"github.com/spf13/cast"
)

func main() {
	maxSize := math.Ceil(float64(100*10) / 1024)

	fmt.Println(cast.ToString(maxSize))
}
