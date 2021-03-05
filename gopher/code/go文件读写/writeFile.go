package main


import (

	"fmt"
	"os"
	"io/ioutil"

)


func main() {


	inputfile := "go.txt"
	outputfile := "cp-go.txt"
	
	buf, err := ioutil.ReadFile(inputfile)
	
	if err != nil {
	
		fmt.Println("read err")
		os.Exit(0)
	}
		
	fmt.Println(string(buf))
	
	err = ioutil.WriteFile(outputfile, buf, 0644) 
	
	if err != nil {
		
		fmt.Println("写入失败")	
	
	}
}
