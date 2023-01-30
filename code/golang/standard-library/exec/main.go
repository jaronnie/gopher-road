package main

import (
	"fmt"
	"os/exec"
)

func main() {
	resp, err := exec.Command("sh", "-c", "date +'%s'").CombinedOutput()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(resp))
}
