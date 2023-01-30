package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	//var data []byte
	err := ioutil.WriteFile("test.txt", []byte("test"), os.ModePerm)
	if err != nil {
		fmt.Println(err)
		return
	}
}
