package main

import (
	"fmt"
	"os"
)

//自定义错误类型，返回更多的信息。
type errorNotFound struct {
	file string
}

func main() {
	if err := Open("test.txt"); err != nil {
		//类型断言
		if _, ok := err.(errorNotFound); ok {
			fmt.Println(err)
		} else {
			panic("unknown error")
		}
	}
}

//Error接口检查
var _ error = (*errorNotFound)(nil)
func (e errorNotFound) Error() string {
	return fmt.Sprintf("file %q not found", e.file)
}

func Open(file string) error {
	_, err := os.Open("test.txt")
	if err != nil {
		return errorNotFound{file: file}
	}
	return nil
}
