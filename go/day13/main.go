package main

import "fmt"

type Node struct {
	Value int
	Prev  *Node
	Next  *Node
}
type DoubleLinked struct {
	Length int
	Head   *Node
	Tail   *Node
}

func (l *DoubleLinked) Prepend(n *Node) {
	l.Length++
	if l.Head == nil {
		l.Head, l.Tail = n, n
	}
	n.Next = l.Head
	l.Head.Prev = n
	l.Head = n
}

func (l *DoubleLinked) Append(n *Node) {
	if l.Length == 0 {
		l.Prepend(n)
	}
	l.Length++
	if l.Tail == nil {
		l.Head, l.Tail = n, n
		return
	}
	n.Prev = l.Tail
	l.Tail.Next = n
	l.Tail = n
}

func (l *DoubleLinked) Remove(v int) {
	l.Length--
	curr := l.Head
	for curr.Next.Value != v {
		curr = curr.Next
	}
	// curr is 10 after breaking out of four loop if we remove at 12 first
	if curr.Next.Next == l.Tail {
		l.Tail = curr
	}
	curr.Next = curr.Next.Next
}

func (l DoubleLinked) GetValues() {
	toPrint := l.Head
	for l.Length != 0 {
		if toPrint == nil {
			return
		}
		fmt.Println("%V", toPrint.Value)
		toPrint = toPrint.Next
		l.Length--
	}
	fmt.Println()
}

func main() {
	fmt.Println("hello world!")
	list := &DoubleLinked{}
	node1 := &Node{Value: 10}
	node2 := &Node{Value: 12}
	node3 := &Node{Value: 13}
	node4 := &Node{Value: 14}
	list.Prepend(node1)
	list.Append(node2)
	list.Append(node3)
	list.Append(node4)
	list.GetValues()
	list.Remove(12)
	// list.GetValues()
	list.Remove(13)
	list.Remove(14)
	list.GetValues()
}
