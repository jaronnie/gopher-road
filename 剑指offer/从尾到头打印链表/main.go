package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	head := createListNode([]int{1, 2, 3})
	//printListNode(head)
	head = reversePrintListNode(head)
	printListNode(head)


}

//func reversePrint(head *ListNode) []int {
//
//}

func createListNode(num []int) *ListNode {
	head := new(ListNode)
	p := head
	for _, v := range num {
		q := new(ListNode)
		q.Val = v
		p.Next = q
		p = p.Next
	}
	return head.Next
}

func printListNode(head *ListNode) {
	if head == nil {
		return
	}
	p := head
	for p != nil {
		fmt.Println(p.Val)
		p = p.Next
	}
}

func reversePrintListNode(head *ListNode) *ListNode{
	//var nums []int
	cur := head
	var pre *ListNode = nil
	for cur != nil {
		pre, cur, cur.Next = cur, cur.Next, pre
	}
	return pre
}