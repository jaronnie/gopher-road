package main

import (
	"fmt"
	"github.com/kevwan/mapreduce"
	"time"
)

func main() {
	reduce, _ := mapreduce.MapReduce(func(source chan<- interface{}) {
		for i := 0; i < 10; i++ {
			source <- i
		}
	}, func(item interface{}, writer mapreduce.Writer, cancel func(error)) {
		time.Sleep(time.Second * time.Duration(item.(int)))
		writer.Write(item)
	}, func(pipe <-chan interface{}, writer mapreduce.Writer, cancel func(error)) {
		var data []int
		for v := range pipe {
			data = append(data, v.(int))
		}
		writer.Write(data)
	})

	fmt.Println(reduce)
}
