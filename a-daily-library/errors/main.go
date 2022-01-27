package main

import (
	"encoding/json"
	"fmt"
	"github.com/pkg/errors"
)

var (
	InvalidName = errors.New("invalid name")
	InvalidNickname = errors.New("invalid nickname")
)

type Auth struct {
	Name string `json:"name"`
	Nickname string `json:"nickname"`
}

func main() {
	args := []byte(`{"name":"jaronni", "nickname":"gocloudcoder"}`)
	err := Exec(args)
	if errors.Is(err, InvalidName) {
		fmt.Println("pass name")
		return
	}
	if errors.Is(err, InvalidNickname) {
		fmt.Println("pass nickname")
		return
	}
}

func Exec(args []byte) error {
	auth, err := ParseArgs(args)
	if err != nil {
		return errors.Wrap(err, "parse args")
	}
	err = Process(auth)
	if err != nil {
		return errors.Wrap(err, "fail to process")
	}
	return nil
}

func ParseArgs(args []byte) (*Auth, error) {
	var auth Auth
	err := json.Unmarshal(args, &auth)
	if err != nil {
		return nil, errors.Wrap(err, "unmarshal to Auth")
	}
	return &auth, nil
}

func Process(auth *Auth) error {
	if auth.Name != "jaronnie" {
		return errors.Wrap(InvalidName, "invalid name")
	}
	if auth.Nickname != "gocloudcoder" {
		return errors.Wrap(InvalidNickname, "invalid nickname")
	}
	return nil
}