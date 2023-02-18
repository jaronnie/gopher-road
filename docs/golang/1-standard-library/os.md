# os 包

## 获取环境变量

```go
package main

import (
	"os"
)

// GetEnviron 获取所有环境变量
func GetEnviron() []string {
	environ := os.Environ()
	return environ
}

// Getenv 根据 key 获取对应变量
func Getenv(key string) string {
	return os.Getenv(key)
}
```

```go
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
```

如果环境变量仅在当前终端下生效, 那么会显示, 换一个 tty 后就不会显示.

如在当前终端下执行 `export MachineID=1`

```shell
go test -v -count=1 -gcflags=-l ./...
```

重新打开终端, 这时 MachineID 为空

**注意需要加上 -count=1 去掉缓存, 因为 go test 框架在无代码改动时会从缓存中读取数据**

## 源码
* [standard-library/os](https://github.com/jaronnie/gopher-road/tree/main/code/golang/standard-library/os)



