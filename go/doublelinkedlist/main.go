package main

import (
	"fmt"
	"math"
)

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
func (d *LinkedList) DeleteNode(item int) {
	if d.Length == 0 { // if length id 0 we just exit out of function
		return
	}
	curr := d.Head    // starting point
	for curr != nil { // while curr does NOT = nil keep searching
		if curr.Value == item {
			break // if we find it we break while loop
		}
		curr = curr.Next
	}
	// if curr == nil { // if curr = nil we exit function
	// 	return
	// }
	d.Length--            // minus length
	if curr.Prev != nil { // if we have a previous connect to curr.next
		curr.Prev.Next = curr.Next
	}
	if curr.Next != nil { // if we have a next connect to curr.prev
		curr.Next.Prev = curr.Prev
	}
	if curr == d.Head { // if deleting head move head to next node
		d.Head = curr.Next
	}
	if curr == d.Tail { // if deleting tail move tail to next node
		d.Tail = curr.Prev
	}
}

func (d LinkedList) GetMin() int {
	curr := d.Head
	min := math.MaxInt
	for curr != nil {
		if curr.Value < min {
			min = curr.Value
		}
		curr = curr.Next
	}
	return min
}

func (d LinkedList) GetMax() int {
	curr := d.Head
	max := math.MinInt
	for curr != nil {
		if curr.Value > max {
			max = curr.Value
		}
		curr = curr.Next
	}
	return max
}

func main() {
	fmt.Println("hellow world!")
	dl := &LinkedList{}
	dl.Prepend(10)
	dl.Append(12)
	dl.Append(11)
	dl.Append(8)
	fmt.Println(dl)
	fmt.Println("Getting length:", dl.Length)
	fmt.Println("Getting values....")
	dl.GetAll()
	fmt.Println()
	fmt.Println("deleting....")
	dl.DeleteNode(11)
	dl.DeleteNode(8)
	fmt.Println()
	fmt.Println("Getting values....")
	dl.GetAll()
	fmt.Println("Getting min value")
	fmt.Println(dl.GetMin())
	fmt.Println("Getting max value")
	fmt.Println(dl.GetMax())
}
