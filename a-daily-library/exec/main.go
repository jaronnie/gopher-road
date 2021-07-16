package main

import (
	"errors"
	"fmt"
	"os/exec"
)

func main() {
	fmt.Println(RunShellCommand("grep 'authorization: enabled' etc/mongod.conf"))
}

func RunShellCommand(command string) (string, error) {
	if command == "" {
		return "", errors.New("command require not empty")
	}

	cmd := exec.Command("bash", "-c", command)
	buf, err := cmd.CombinedOutput()
	if err != nil {
		return "", err
	}
	return string(buf), nil
}
