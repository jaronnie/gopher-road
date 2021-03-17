package main

import (
	"fmt"
	"sort"
)

/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

func main() {
	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4}))
}
//暴露求解但是有重复不符合题意
func threeSum(nums []int) [][]int {
	res := make([][]int, 0)
	//记录每个元素在切片中出现的次数
	maps := make(map[int]int)
	for _, v := range nums {
		maps[v]++
	}

	uniqNums := make([]int, 0)
	for key := range maps {
		uniqNums = append(uniqNums, key)
	}
	sort.Ints(uniqNums)
	for i := 0; i < len(uniqNums); i++ {
		if uniqNums[i] * 3 == 0 && maps[uniqNums[i]] >= 3 {
			res = append(res, []int{0, 0, 0})
		}
		for j := i + 1; j < len(uniqNums); j++ {
			c := 0 - uniqNums[i] - uniqNums[j]
			if c > uniqNums[j] && maps[c] > 0 {
				res = append(res, []int{uniqNums[i], uniqNums[j], c})
			}
			if (uniqNums[i] * 2 + uniqNums[j] == 0) && maps[uniqNums[i]] >= 2 {
				res = append(res, []int{uniqNums[i], uniqNums[i], uniqNums[j]})
			}
			if (uniqNums[j]*2 +uniqNums[i] == 0) && maps[uniqNums[j]] >= 2 {
				res = append(res, []int{uniqNums[j], uniqNums[j], uniqNums[i]})
			}
		}
	}
	return res
}
