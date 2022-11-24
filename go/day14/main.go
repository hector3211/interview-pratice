package main

import "fmt"

type Node struct {
	Value int
	Left  *Node
	Right *Node
}

func (n *Node) Insert(v int) {
	if v > n.Value {
		if n.Right == nil {
			n.Right = &Node{Value: v}
		} else {
			n.Right.Insert(v)
		}
	} else {
		if n.Left == nil {
			n.Left = &Node{Value: v}
		} else {
			n.Left.Insert(v)
		}
	}
}

func (n *Node) Search(v int) bool {
	if n == nil {
		return false
	}
	if n.Value == v {
		return true
	}
	if v > n.Value {
		return n.Right.Search(v)
	} else {
		return n.Left.Search(v)
	}
}

func (n *Node) MinSum() int {
	tmp := n         // set up current
	for tmp != nil { // while current does not equal nil keep going
		if tmp.Left == nil { // if up next = nil then get current's value
			return tmp.Value // return the value
		}
		tmp = tmp.Left // keep going left (where smaller numners are)
	}
	return 100
}

func (n *Node) MaxSum() int {
	tmp := n         // set up current
	for tmp != nil { // while current does not equal nil keep going
		if tmp.Right == nil { // if up next = nil then get current's value
			return tmp.Value // return the value
		}
		tmp = tmp.Right // keep going right (where bigger numbers are)
	}
	return 0
}

func PreOrderTriv(n *Node) {
	if n == nil {
		return
	} else {
		fmt.Println("%V", n.Value)
		PreOrderTriv(n.Left)
		PreOrderTriv(n.Right)
	}
}

func InOrder(n *Node) {
	if n == nil {
		return
	} else {
		PreOrderTriv(n.Left)
		fmt.Println("%V", n.Value)
		PreOrderTriv(n.Right)
	}
}

func PostOrder(n *Node) {
	if n == nil {
		return
	} else {
		PostOrder(n.Right)
		fmt.Println("%V", n.Value)
		PostOrder(n.Left)
	}
}

func main() {
	fmt.Println("hello hector")
	bs := &Node{Value: 10}
	bs.Insert(2)
	bs.Insert(5)
	bs.Insert(12)
	bs.Insert(13)
	fmt.Println(bs)
	fmt.Println(bs.Search(20))
	fmt.Println(bs.MinSum())
	fmt.Println(bs.MaxSum())
	// PreOrderTriv(bs)
	// fmt.Println()
	// InOrder(bs)
	// fmt.Println()
	// PostOrder(bs)
}
