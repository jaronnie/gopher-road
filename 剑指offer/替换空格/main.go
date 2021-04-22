package main

import "fmt"

func main() {
	fmt.Println(RepeatSpace("we are happy"))
}

func RepeatSpace(s string) string {
	//fmt.Println(len(s))
	var bytes []byte
	for _, v := range s {
		if v == 32 {
			bytes = append(bytes, byte('%'), byte('2'), byte('0'))
		} else {
			bytes = append(bytes, byte(v))
		}

	}
	return string(bytes)
}
