package main

import (
	"errors"
	"fmt"
)

var ErrCouldNotOpen = errors.New("could not open")

func main() {
	if err := open(); err != nil {
		if errors.Is(err, ErrCouldNotOpen) {
			fmt.Println(ErrCouldNotOpen)
		} else {
			panic("unknown err")
		}
	}
}

func open() error {
	return ErrCouldNotOpen
}
