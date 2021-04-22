```shell
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```

```go
func isValid(s string) bool {
    if len(s) % 2 == 1 {
		return false
	}
	if len(s) == 0 {
		return true
	}
	var stack []string
	for _, v := range s {
		if string(v) == "(" {
			stack = append(stack, ")")
		} else if string(v) == "[" {
			stack = append(stack, "]")
		} else if string(v) == "{" {
			stack = append(stack, "}")
		} else {
            if len(stack) == 0 {
                return false
            }
			if stack[len(stack)-1] != string(v) {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}
```
```go
//把切片当栈用也是牛逼哈
var stack []string
//push
stack = append(stack, value)
//pop
//弹出一个元素就把最后一个元素给切掉
stack = stack[:len(stack)-1]
```
思路由以下提供

<figure><iframe src="https://picture.nj-jay.com/validString.m4v" allowfullscreen=""></iframe></figure>