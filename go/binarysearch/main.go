package main

import (
	"fmt"
	"math"
)

func BSearch(arr []int, needle int) bool {
	lo := 0
	hi := len(arr)
	for lo < hi {
		mid := int(math.Floor(float64(lo + (hi-lo)/2)))
		v := arr[mid]
		if needle == v {
			return true
		} else if needle > v {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return false
}

func main() {
	array := []int{0, 1, 21, 33, 45, 45, 61, 71, 72, 73}
	target := 33
	fmt.Println(BSearch(array, target))
}
