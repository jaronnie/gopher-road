# 二叉树

## 定义结构

```go
type treeNode struct {
    Val int
    Left, Right *treeNode
}
```

## 创建二叉树

### 定义创建节点的函数，参数为v，即节点的值

```go
func createNode(v int) *treeNode { return &treeNode {Val:v} }
```

### 创建一个满二叉树

![image-20210328135408960](http://picture.nj-jay.com/image-20210328135408960.png)

```go
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
}
```

## 遍历二叉树

### 前序遍历

> 根->左->右

#### 递归方法

> 优点：简单
>
> 缺点：无法保存到数组中，可以通过指针传值

```go
func (node *treeNode) preOrderPrint() {
	if node == nil {
		return
	}
	fmt.Println(node.Val) //直接打印
	node.Left.preOrderPrint()
	node.Right.preOrderPrint()
}
```

```go
//使用递归,指针传值
func (node *treeNode) preOrderPtrSave(res *[]int) {
	if node == nil {
		return
	}
	*res = append(*res, node.Val)
	node.Left.preOrderPtrSave(res)
	node.Right.preOrderPtrSave(res)
}
```

#### 非递归方法

> 使用栈

```go
func (node *treeNode) preOrderSave() []int {
    //存在res中
    res := make([]int, 0)
    //定义一个栈
    stack := make([]*treeNode, 0)
    for node != nil || len(stack) != 0 {
        for node != nil {
            result = append(result, node.Val)
            stack = append(stack, node)
            node = node.Left
        }
        n := stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        node = n.Right
    }
    return res
}
```

### 中序遍历

#### 递归方法

```go
func (node *treeNode) middleOrderPrint() {
    if node == nil {
        return
    }
    node.Left.middleOrderPrint()
    fmt.Println(node.Val)
    node.Right.middleOrderPrint()
}
```

#### 非递归方法

```go
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
```

### 后序遍历

#### 递归方法

```go
func (node *treeNode) lastOrderPrint() {
    if node == nil {
        return
    }
    node.Left.lastOrderPrint()
    node.Right.lastOrderPrint()
    fmt.Println(node.Val)
}
```

```go
func (node *treeNode) lastOrderPtrSave(res []*int) {
    if node == nil {
        return
    }
    node.Left.lastOrderPrint(res)
    node.Right.lastOrderPrint(res)
    *res = append(*res, node.Val)
}
```

