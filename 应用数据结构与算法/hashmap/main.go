package main

import "fmt"

type dict struct {
	hashTables [9]*hashTable
}

type hashTable struct {
	node *entry
}

// 链表
type entry struct {
	key, value string
	next       *entry
}

func main() {
	dict := newDict()
	dict.set("hello", "world")
	dict.set("d", "d")
	dict.set("ni", "hao")
	fmt.Println(dict.get("hello"))
	fmt.Println(dict.get("d"))
	fmt.Println(dict.get("ni"))
}

func newDict() *dict {
	var hashTables [9]*hashTable
	return &dict{hashTables}
}

func newEntry() *entry { return &entry{} }

func newHashTable() *hashTable {
	node := new(entry)
	return &hashTable{node}
}

func hashCode(key string) uint {
	var code uint
	for _, v := range key {
		code += uint(v)
	}
	return code
}

func hashFunc(key string) uint {
	return hashCode(key) % 9
}

func (d *dict) set(key, value string) bool {
	idx := hashFunc(key)
	ety := newEntry()
	hashTab := newHashTable()
	if d.hashTables[idx] != nil {
		// 插入到头部
		ety.key = key
		ety.value = value
		ety.next = d.hashTables[idx].node.next
		d.hashTables[idx].node.next = ety
	} else {
		d.hashTables[idx] = hashTab
		hashTab.node = ety
		ety.key = key
		ety.value = value
	}

	return true
}

func (d *dict) get(key string) string {
	idx := hashFunc(key)
	if d.hashTables[idx] == nil {
		return ""
	}
	//遍历 hashTable
	head := d.hashTables[idx].node
	node := head
	for node != nil {
		if node.key == key {
			return node.value
		}
		node = node.next
	}
	return ""
}
