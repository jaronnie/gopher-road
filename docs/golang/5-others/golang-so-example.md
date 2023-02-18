# golang-so-example
golang 编译成动态库 so, C 语言调用例子

> 仅在 linux 环境下测试

## 编写 go 文件

```go
// path: so/so.go
package main

import "C"

//export add
func add(a, b int) int {
	return a + b
}
func main() {

}
```

## 编译成动态库 so.so

```shell
cd so
go build -x -v -ldflags "-s -w" -buildmode=c-shared -o so.so so.go
```

**在 so 文件夹下生成了 so.h, so.so**

## 编写 C 文件

```c
// path: ./main.c
#include<stdio.h>
#include"./so/so.h"

int main(){
	int sum = 0;
	sum = add(2, 3);
	printf("%d\n", sum);
	return 0;
}
```

## 编译 C 文件

```shell
gcc main.c -L ./ so/so.so -o goso
```

## 运行

```shell
./goso
// output 
// 5
```

## 源码

* [golang-so-example](https://github.com/jaronnie/golang-so-example)



