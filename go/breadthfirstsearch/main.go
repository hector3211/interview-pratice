package main

import (
	"fmt"
	"math"
)

type Node struct {
	Value int
	Left  *Node
	Right *Node
}

type Tree struct {
	Root *Node
}

func (t *Tree) Append(item int) {
	newNode := &Node{Value: item}
	if t.Root == nil {
		t.Root = newNode
	} else {
		curr := t.Root
		for curr != nil {
			if item > curr.Value {
				// go right
				if curr.Right == nil {
					curr.Right = newNode
					return
				} else {
					curr = curr.Right
				}
			} else {
				// go left
				if curr.Left == nil {
					curr.Left = newNode
					return
				} else {
					curr = curr.Left
				}
			}
		}
	}
}

func (t *Tree) FindMin() int {
	if t == nil {
		return math.MaxInt32
	} else {
		curr := t.Root
		for curr != nil {
			if curr.Left == nil {
				return curr.Value
			}
			curr = curr.Left
		}
	}
	return math.MaxInt32
}

func (t *Tree) FindMax() int {
	if t == nil {
		return math.MinInt32
	} else {
		curr := t.Root
		for curr != nil {
			if curr.Right == nil {
				return curr.Value
			}
			curr = curr.Right
		}
	}
	return math.MinInt32
}

func InOrder(n *Node) {
	if n == nil {
		return
	} else {
		InOrder(n.Left)
		fmt.Println(n.Value)
		InOrder(n.Right)
	}
}

func PreOrder(n *Node) {
	if n == nil {
		return
	} else {
		fmt.Println(n.Value)
		PreOrder(n.Left)
		PreOrder(n.Right)
	}
}

func PostOrder(n *Node) {
	if n == nil {
		return
	} else {
		PostOrder(n.Left)
		PostOrder(n.Right)
		fmt.Println(n.Value)
	}
}

// breadth first search
func Bfs(head *Node, needle int) bool {
	q := []*Node{head} // predent this is a que....
	for len(q) != 0 {
		var curr *Node
		curr, q = q[0], q[1:] // here we shift() the que
		if curr.Value == needle {
			return true
		}
		if curr.Left != nil {
			q = append(q, curr.Left)
		}
		if curr.Right != nil {
			q = append(q, curr.Right)
		}
	}
	return false
}

func main() {
	fmt.Println("hellow hec")
	bst := &Tree{}
	fmt.Println(bst)
	bst.Append(10)
	bst.Append(12)
	bst.Append(11)
	bst.Append(2)
	bst.Append(5)
	bst.Append(1)
	fmt.Println(bst.Root)
	InOrder(bst.Root)
	fmt.Println("Finding min")
	fmt.Println(bst.FindMin())
	fmt.Println()
	fmt.Println("Finding max")
	fmt.Println(bst.FindMax())
	fmt.Println("breadth first searching...")
	fmt.Println(Bfs(bst.Root, 22))
}
