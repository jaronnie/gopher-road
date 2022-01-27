package main

import (
	"fmt"
	"github.com/bitly/go-simplejson"
)
func main() {

	fullData := `{"Items":[{"Key":"dockerv2_0_0/machine/NetworkMode","KeyText":"网络模式","Value":"bridge"},{"Key":"dockerv2_0_0/machine/NetworkName","KeyText":"Network名称","Value":""},{"Key":"dockerv2_0_0/machine/ExportPort","KeyText":"开放端口方式","Value":"端口映射"},{"Key":"dockerv2_0_0/machine/DockerVersion","KeyText":"Docker版本","Value":""},{"Key":"dockerv2_0_0/machine/ComposeVersion","KeyText":"docker-compose版本","Value":""}]}`

	simple, err := simplejson.NewJson([]byte(fullData))
	if err != nil {
		fmt.Println(err)
		return
	}

	simple.Get("Items").GetIndex(1).Set("Value", "network")

	fmt.Println(simple)


}