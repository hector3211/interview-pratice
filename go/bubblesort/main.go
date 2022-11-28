package main

import "fmt"

func BubbleSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr)-1-i; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
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
