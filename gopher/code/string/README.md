# go中的字符串

## 字符串知识点

>go中采用utf-8编码
>
>当字符为ASCII码时，占用一个字节
>
>其他根据需要占用2-4个字节
>
>是一种值类型
>
>值不可以改变
>
>* 解释字符串
>* 非解释字符串

- 解释字符串：

  该类字符串使用双引号括起来，其中的相关的转义字符将被替换，这些转义字符包括：

  - `\n`：换行符
  - `\r`：回车符
  - `\t`：tab 键
  - `\u` 或 `\U`：Unicode 字符
  - `\\`：反斜杠自身

- 非解释字符串：

  该类字符串使用反引号括起来,特殊符号同样被输出

C/C++不一样，Go 中的字符串是根据长度限定，而非特殊字符`\0`

## 字符串实例

```go
package main

import "fmt"

func main() {
        str :=  "I\nlove\ngolang"
        fmt.Println(str)
        var str1 string = `I\nlove\ngolang`
        fmt.Println(str1)
}
//运行结果
I
love
golang
I\nlove\ngolang
```