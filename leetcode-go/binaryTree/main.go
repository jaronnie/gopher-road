package main

import "fmt"

type treeNode struct {
	Val int
	Left, Right *treeNode
}

func main() {
	//定义一个根节点
	root := &treeNode{Val:1}
	//左子树
	root.Left = createNode(2)
	root.Left.Left = createNode(4)
	root.Left.Right = createNode(5)
	//右子树
	root.Right = createNode(3)
	root.Right.Left = createNode(6)
	root.Right.Right = createNode(7)

	//前序递归遍历
	//root.preOrderPrint()
	//fmt.Println(root.preOrderSave())
	//res := make([]int, 0)
	//root.preOrderPtrSave(&res)
	//fmt.Println(res)
	//中序递归遍历
	//root.middleOrderPrint()
	//

	//后序遍历递归方法
	//root.lastOrderPrint()
	res := make([]int, 0)
	root.lastOrderPtrSave(&res)
	fmt.Println(res)
}

func createNode(v int) *treeNode { return &treeNode {Val:v} }

func (node *treeNode) preOrderPrint() {
	if node == nil {
		return
	}
	fmt.Println(node.Val) //直接打印
	node.Left.preOrderPrint()
	node.Right.preOrderPrint()
}

//使用递归,指针传值
func (node *treeNode) preOrderPtrSave(res *[]int) {
	if node == nil {
		return
	}
	*res = append(*res, node.Val)
	node.Left.preOrderPtrSave(res)
	node.Right.preOrderPtrSave(res)
}

func (node *treeNode)preOrderSave() []int {
	// 非递归
	if node == nil{
		return nil
	}
	res := make([]int,0)
	stack := make([]*treeNode,0)

	for node != nil || len(stack) != 0{
		for node != nil{
			// 前序遍历，所以先保存结果
			res = append(res,node.Val)
			stack = append(stack,node)
			node = node.Left
		}
		// pop
		n := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		node = n.Right
	}
	return res
}

//中序遍历递归
func (node *treeNode) middleOrderPrint() {
	if node == nil {
		return
	}
	node.Left.middleOrderPrint()
	fmt.Println(node.Val)
	node.Right.middleOrderPrint()
}

func (node *treeNode) middleOrderSave() []int {
	if node == nil {
		return nil
	}
	res := make([]int, 0)
	stack := make([]*treeNode, 0)
	for node != nil || len(stack) > 0 {
		for node != nil {
			stack = append(stack, node)
			node = node.Left
		}
		n := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		res = append(res, n.Val)
		node = n.Right
	}
	return res
}

//后序遍历递归方法
func (node *treeNode) lastOrderPrint() {
	if node == nil {
		return
	}
	node.Left.lastOrderPrint()
	node.Right.lastOrderPrint()
	fmt.Println(node.Val)
}

func (node *treeNode) lastOrderPtrSave(res *[]int) {
	if node == nil {
		return
	}
	node.Left.lastOrderPtrSave(res)
	node.Right.lastOrderPtrSave(res)
	*res = append(*res, node.Val)
}
