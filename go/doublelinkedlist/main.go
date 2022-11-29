package main

import "fmt"

type Node struct {
	Value int
	Prev  *Node
	Next  *Node
}

type LinkedList struct {
	Length int
	Head   *Node
	Tail   *Node
}

func (d *LinkedList) Prepend(item int) {
	d.Length++
	newNode := &Node{Value: item}
	if d.Head == nil {
		d.Head, d.Tail = newNode, newNode
	} else {
		newNode.Next = d.Head
		d.Head.Prev = newNode
		d.Head = newNode
	}
}

func (d *LinkedList) Append(item int) {
	newNode := &Node{Value: item}
	if d.Length == 0 {
		d.Prepend(item)
		return
	}
	d.Length++
	if d.Tail == nil {
		d.Head, d.Tail = newNode, newNode
	} else {
		newNode.Prev = d.Tail
		d.Tail.Next = newNode
		d.Tail = newNode
	}
}

func (d LinkedList) GetAll() {
	if d.Length == 0 {
		return
	}
	curr := d.Head
	for curr != nil {
		fmt.Println(curr.Value)
		curr = curr.Next
	}
}

// Delete a node

func main() {
	fmt.Println("hellow world!")
	dl := &LinkedList{}
	dl.Prepend(10)
	dl.Append(12)
	dl.Append(11)
	dl.Append(8)
	fmt.Println(dl)
	fmt.Println(dl.Length)
	fmt.Println("Getting values....")
	dl.GetAll()
}
