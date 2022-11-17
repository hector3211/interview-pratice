package main

import "fmt"

type Bst struct {
	Value int
	Left  *Bst
	Right *Bst
}

func (b *Bst) Find(t int) int {
	if b.Value == t {
		return b.Value
	}
	if b.Value < t {
		return b.Right.Find(t)
	} else if b.Value > t {
		return b.Left.Find(t)
	}
	return 0
}

func main() {
	fmt.Println("hello world")
}
