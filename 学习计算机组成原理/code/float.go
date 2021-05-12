package main

import "fmt"

func main() {
 var sum float64
 var x float64 = 0.3
 for i := 0; i < 10000000; i++ {
  sum += x
 }
 fmt.Println(sum)
}
