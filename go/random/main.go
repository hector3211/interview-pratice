package main

import (
	"fmt"
	"sort"
)

type ANode struct {
	value int
	next  *ANode
	prev  *ANode
}

type List struct {
	head   *ANode
	tail   *ANode
	length int
}

func (l *List) preappend(item int) {
	l.length += 1
	newNode := &ANode{value: item}
	if l.head == nil {
		l.head, l.tail = newNode, newNode
	} else {
		newNode.next = l.head
		l.head.prev = newNode
		l.head = newNode
	}
}

func (l *List) postappend(item int) {
	l.length += 1
	newNode := &ANode{value: item}
	if l.tail == nil {
		l.tail, l.head = newNode, newNode
	} else {
		newNode.prev = l.tail
		l.tail.next = newNode
		l.tail = newNode
	}
}

func (l *List) remove(item int) {
	l.length -= 1
	if l.length == 0 {
		return
	} else {
		curr := l.head
		for curr != nil {
			if curr.value == item {
				break
			}
			curr = curr.next
		}
		if curr.next != nil {
			curr.next.prev = curr.prev
		}
		if curr.prev != nil {
			curr.prev.next = curr.next
		}
		if curr == l.head {
			l.head = curr.next
		}
		if curr == l.tail {
			l.tail = curr.prev
		}
	}
}

func (l List) getall() {
	if l.length == 0 {
		return
	} else {
		curr := l.head
		for curr != nil {
			fmt.Println("value - ", curr.value)
			curr = curr.next
		}
	}
}

func main() {
	// hey := "hey"
	// saying := hey + " hector"
	// fmt.Println(saying)

	ar := []int{12, 8, 7, 3, 1}
	sort.Ints(ar)
	// fmt.Println(ar)
	first := ar[0]
	last := ar[len(ar)-1]

	rng := []int{first}
	i := first
	for i < last {
		i += 1
		rng = append(rng, i)
	}

	// fmt.Println(rng)

	list := &List{}
	list.preappend(10)
	list.preappend(11)
	list.preappend(13)
	list.postappend(9)
	list.remove(11)
	list.getall()

}
