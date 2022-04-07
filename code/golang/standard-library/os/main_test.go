package main

import (
	"os"
	"testing"
)

func TestGetEnviron(t *testing.T) {
	environ := os.Environ()
	t.Log(environ)
}

func TestGetenv(t *testing.T) {
	// export MachineID=1
	getenv := os.Getenv("MachineID")
	t.Log(getenv)
}
