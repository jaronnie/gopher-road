# 找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 简单粗暴的思路

```go
func finRepeatNumber1(nums []int) int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return nums[i]
			}
		}
	}
	return -1
}
```

两层for循环，直接超时！

## 先排序再找重复数字

```go
func findRepeatNumber2(nums []int) int {
	sort(nums)
	for i := 0; i < len(nums); i++ {
		if nums[i] == nums[i + 1] {
			return nums[i]
		}
	}
	return -1
}
func sort(nums []int) {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] > nums[j] {
				nums[i], nums[j] = nums[j], nums[i]
			}
		}
	}
}
```

与方法一没区别，超时！

## 哈希表

```go
func findRepeatNumber3(nums []int) int {
	maps := make(map[int]int)
	for index, v := range nums {
		if _, ok := maps[v]; ok {
			return v
		}
		maps[v] = index
	}
	return -1
}
```

先判断map中有没有这个键值，如果没有就添加。当再次碰到重复的数字的时候，就会直接返回这个数字！

## 切片，每添加一个数字在对用的坐标上加1，当大于1时说明出现重复的数字

```go
func findRepeatNumber4(nums []int) int {
	slices := make([]int, len(nums))
	for _, value := range nums {
		slices[value]++
		if slices[value] > 1 {
			return value
		}
	}
	return -1
}
```

这些都不是最优解，目前能力达不到。只能理解时间复杂度为O(n)，空间复杂度为O(n)的解法。

> time : 2021.03.06

个人认为最适合go的写法是(完整代码)

```go
package main
import (
	"fmt"
)
func main() {
	nums := []int{1, 2, 3, 3}
	fmt.Println(findRepeatNumber4(nums))
}
func findRepeatNumber3(nums []int) int {
	maps := make(map[int]int)
	for index, v := range nums {
		if _, ok := maps[v]; ok {
			return v
		}
		maps[v] = index
	}
	return -1
}
```

