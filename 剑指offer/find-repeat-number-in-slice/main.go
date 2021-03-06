package main

import "fmt"

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

func findRepeatNumber2(nums []int) int {
	sort(nums)
	for i := 0; i < len(nums); i++ {
		if nums[i] == nums[i + 1] {
			return nums[i]
		}
	}
	return -1
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


func sort(nums []int) {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] > nums[j] {
				nums[i], nums[j] = nums[j], nums[i]
			}
		}
	}
}

func main() {
	nums := []int{1, 2, 3, 3}
	fmt.Println(findRepeatNumber4(nums))
}