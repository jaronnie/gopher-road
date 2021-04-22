package main

import "fmt"

type sorter interface {
	Len() int
	Less(i, j int) bool
	Swap(i, j int)
}

func main() {
	d := &data{[]int{1, 3, 2, 4, 6}}
	sortMaoPao(d)
	fmt.Println(*d)
}

type data struct {
	nums []int
}

func (d data) Len() int {
	return len(d.nums)
}

func (d data) Less(i, j int) bool {
	if d.nums[i] > d.nums[j] {
		return true
	}
	return false
}

func (d *data) Swap(i, j int) {
	var temp int
	temp = d.nums[i]
	d.nums[i] = d.nums[j]
	d.nums[j] = temp
}

func sortMaoPao(s sorter) {
	length := s.Len()
	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			if s.Less(i, j) {
				s.Swap(i, j)
			}
		}
	}
}
