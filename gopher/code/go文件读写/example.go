package main

import (


	"fmt"
	"os"
	"io/ioutil"
)

type Page struct {

	Title string
	Body []byte

}

func (p *Page) save() {


	outputfile, _ := os.OpenFile(p.Title, os.O_WRONLY | os.O_CREATE, 0666)
	outputfile.Write(p.Body)

}

func (p *Page) load(title string) {

	output, _ := ioutil.ReadFile(title)
	fmt.Println(string(output))

}

func main() {


	p := &Page{"nj.txt", []byte("本章:文件读写")}

	p.save()

	p.load("nj.txt")

}
