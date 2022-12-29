# golang-plan9-example

使用 plan9 汇编编写 add 两数相加的函数

## 用 go 定义好函数的定义

```go
func add(int64, int64) int64
```

### 用 plan9 编写函数逻辑

```plan9_x86
TEXT ·add(SB), $0-24
    MOVQ arg1+0(FP), CX
    MOVQ arg2+8(FP), BP
    ADDQ CX, BP
    MOVQ BP, result+16(FP)
    RET

```

### 定义 main

```go
package main

import "fmt"

func main() {
	fmt.Println(add(1, 2))
}

```

执行 `go run .`