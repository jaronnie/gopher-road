package main


import (

	"fmt"
	"os"
	"bufio"
	"io"

)

func main() {



	inputfile, inputErr := os.Open("go.txt")
	
	defer inputfile.Close()

	if inputErr != nil {

		fmt.Println("read err")
		os.Exit(0)
	}

	inputReader := bufio.NewReader(inputfile)
		
	for {
	
		outputLine, readErr := inputReader.ReadString('\n')
		
		fmt.Print(outputLine) //再使用Println就会出现空行的情况
		
		if readErr == io.EOF {
		
			os.Exit(0)
		}
		
		
	}
	
	

}

