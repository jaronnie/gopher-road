package main

import (
	"encoding/json"
	"fmt"
)

type VbStateRes struct {
	Code int       `json:"code"`
	Data StateData `json:"data"`
}

type StateData struct {
	State   int    `json:"state"`
	Message string `json:"message"`
}

func main() {
	var res VbStateRes
	args := `{"code":200,"data":{"@type":"type.googleapis.com/proto.Machine","machineId":"virtualbox-7865-6133-1003","hostName":"virtualbox-7865-6133-1003","hostAddr":"172.16.30.74","machinePort":22,"state":4,"message":"host has been stopped","ports":[{"innerPort":"9009","outerPort":"45415"}]}}`
	err := json.Unmarshal([]byte(args), &res)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(res)
}
