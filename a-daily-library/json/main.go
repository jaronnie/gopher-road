package main

import (
	"encoding/json"
	"fmt"

	"github.com/spf13/cast"
)

type vbState int

type vbStateRes1 struct {
	Hostname    string `json:"hostname"`
	State       int    `json:"state"`
	Message     string `json:"message"`
	HostAddr    string `json:"hostAddr"`
	MachinePort string `json:"machinePort"`
	MachineIp   string `json:"machineIp"`
}

type vbStateRes4 struct {
	hostname    string
	state       int
	message     string
	hostAddr    string
	machinePort string
	machineIp   string
}

type vbStateRes5 struct {
	Hostname    string
	State       vbState
	Message     string
	HostAddr    string
	MachinePort string
	MachineIp   string
}

func (vb *vbStateRes4) UnmarshalJSON(data []byte) (err error) {
	type TempVbStateRes vbStateRes4
	vbr := struct {
		Hostname    string `json:"hostname"`
		State       string `json:"state"`
		Message     string `json:"message"`
		HostAddr    string `json:"hostAddr"`
		MachinePort string `json:"machinePort"`
		MachineIp   string `json:"machineIp"`
		*TempVbStateRes
	}{
		TempVbStateRes: (*TempVbStateRes)(vb),
	}
	if err := json.Unmarshal(data, &vbr); err != nil {
		return err
	}
	vb.hostname = vbr.Hostname
	vb.state = cast.ToInt(vbr.State)
	vb.message = vbr.Message
	vb.hostAddr = vbr.HostAddr
	vb.machinePort = vbr.MachinePort
	vb.machineIp = vbr.MachineIp
	return nil
}

type vbStateRes2 struct {
	hostname    string `json:"hostname"`
	state       string `json:"state"`
	message     string `json:"message"`
	hostAddr    string `json:"host-addr"`
	machinePort string `json:"machine-port"`
	machineIp   string `json:"machine-ip"`
}

type vbStateRes3 struct {
	hostname    string
	state       string
	message     string
	hostAddr    string
	machinePort string
	machineIp   string
}

// // UnmarshalJSON 自定义 Unmarshal JSON 方法
// func (vb *vbStateRes1) UnmarshalJSON(data []byte) (err error) {
// 	type TempVbStateRes vbStateRes1
// 	vbr := struct {
// 		State int `json:"state"`
// 		*TempVbStateRes
// 	}{
// 		TempVbStateRes: (*TempVbStateRes)(vb),
// 	}
// 	if err := json.Unmarshal(data, &vbr); err != nil {
// 		return err
// 	}
// 	vb.State = vbState(vbr.State)
// 	return nil
// }

func main() {
	var s vbStateRes4
	args := `{"hostname":"hyperchain", "state":"1", "message":"successful", "hostAddr":"localhost", "machinePort":"9009", "machineIp":"172.0.19.2"}`
	//args := `{"hostname":"hyperchain", "state":"1", "message":"successful", "host-addr":"localhost", "machine-port":"9009", "machine-ip":"172.0.19.2"}`
	err := json.Unmarshal([]byte(args), &s)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(s)
}
