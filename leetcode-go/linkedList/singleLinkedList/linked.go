package singleLinkedList

//单链表
type SingleLinkedList struct {
	Head   *Node
	Length int
}

// 结点
type Node struct {
	Data int
	Next *Node
}

func New() *SingleLinkedList {
	return &SingleLinkedList{NewNode(0), 0}
}

func NewNode(n int) *Node {
	return &Node{Data: n, Next: nil}
}

//在某个结点后面插入结点
func (s *SingleLinkedList) InsertAfter(n *Node, d int) bool {
	if n == nil {
		return false
	}
	newNode := NewNode(d)
	oldNext := n.Next
	n.Next = newNode
	newNode.Next = oldNext
	s.Length++
	return true
}

func (s *SingleLinkedList) InsertToHead(d int) bool {
	return s.InsertAfter(s.Head, d)
}

func (s *SingleLinkedList) deleteNode(n *Node) bool {
	if n == nil {
		return false
	}
	cur := s.Head.Next
	pre := s.Head
	for cur != nil {
		if cur == n {
			break
		}
		pre = cur
		cur = cur.Next
	}
	if cur == nil {
		return false
	}
	pre.Next = n.Next
	s.Length--
	n = nil
	return true
}

func (s *SingleLinkedList) DeleteNodeByData(d int) bool {
	if !s.IsExist(d) {
		return false
	}
	return s.deleteNode(s.locateNodeByData(d))
}

//通过 data 找到结点
func (s *SingleLinkedList) locateNodeByData(d int) *Node {
	cur := s.Head.Next
	for cur != nil {
		if cur.Data == d {
			//找到了数据,返回结点
			return cur
		}
		cur = cur.Next
	}
	return nil
}

func (s *SingleLinkedList) DeleteTail() int {
	cur := s.Head.Next
	deleted := &Node{}
	for cur != nil {
		deleted = cur
		cur = cur.Next
	}
	s.deleteNode(deleted)
	return deleted.Data
}

func (s *SingleLinkedList) PrintList() []int {
	res := make([]int, 0)
	cur := s.Head.Next
	for cur != nil {
		res = append(res, cur.Data)
		cur = cur.Next
	}
	return res
}

func (s *SingleLinkedList) IsExist(d int) bool {
	cur := s.Head.Next
	for cur != nil {
		if cur.Data == d {
			return true
		}
		cur = cur.Next
	}
	return false
}
