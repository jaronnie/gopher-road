package main

import (
	"time"

	"github.com/spf13/cast"
)

func main() {
	timeStamp := time.Now().Unix() //1617975806
	cast.ToTime(timeStamp)         //2021-04-09 21:43:26 +0800 CST
	timeStr := "2021-04-09 21:43:26"
	cast.ToTime(timeStr) //2021-04-09 21:43:26 +0000 UTC

	duration, _ := time.ParseDuration("1m30s")
	cast.ToDuration(duration) //1m30s

	strDuration := "90s"
	cast.ToDuration(strDuration) //1m30s
}
