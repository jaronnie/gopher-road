package main

import "fmt"

func main() {
	nums := []int{1, 3, 4, 4, 5, 6, 7}
	fmt.Println(binarySearchRange(nums, 4))
}

func binarySearch(nums []int, target int) int {
	start, end := 0, len(nums)-1
	for start+1 < end {
		mid := start + (end-start)>>1
		if nums[mid] == target {
			end = mid
		} else if nums[mid] < target {
			start = mid
		} else if nums[mid] > target {
			end = mid
		}
	}

	if nums[start] == target {
		return start
	}

	if nums[end] == target {
		return end
	}
	return -1
}

func binarySearchLast(nums []int, target int) int {
	start, end := 0, len(nums)-1
	for start+1 < end {
		mid := start + (end-start)>>1
		if nums[mid] == target {
			//如果相等 继续向右找
			start = mid
		} else if nums[mid] < target {
			start = mid
		} else if nums[mid] > target {
			end = mid
		}
	}

	if nums[end] == target {
		return end
	}

	if nums[start] == target {
		return start
	}

	return -1
}

func binarySearchRange(nums []int, target int) []int {
	if len(nums) == 0 {
		return []int{-1, -1}
	}

	result := make([]int, 2)
	result[0] = binarySearch(nums, target)
	if result[0] == -1 {
		return []int{-1, -1}
	}

	result[1] = binarySearchLast(nums, target)
	return result
}

// 倒序
func reverse(nums []int) []int {
	for i := 0; i < len(nums)>>1; i++ {
		nums[i], nums[len(nums)-i-1] = nums[len(nums)-i-1], nums[i]
	}
	return nums
}
