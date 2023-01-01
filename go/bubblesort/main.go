package main

import "fmt"

func BubbleSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[i] > arr[j] {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}
	return arr
}

func main() {
	fmt.Println("hello")
	array := []int{8, 5, 2, 9, 5, 6, 3}
	fmt.Println(BubbleSort(array))
}
