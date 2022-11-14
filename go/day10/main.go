package main

import (
	"fmt"
	"math"
)

func YoOne(arr []int, target int) []int {
	hashy := make(map[int]int)
	for _, v := range arr {
		potential := target - v
		if _, ok := hashy[potential]; ok {
			return []int{potential, v}
		}
		hashy[v] = target - v
	}
	return []int{}
}

func YoTwo(arr []int, seq []int) bool {
	index := 0
	for _, v := range arr {
		if v == seq[index] {
			index++
		}
		if len(seq) == index {
			return true
		}
	}
	return false
}

func YoThree(arr []int) []int {
	startP := 0
	endP := len(arr) - 1
	sqList := make([]int, len(arr))
	// if were going to iterate over the array
	// endP has to start at the 0 index if not we'd get the wrong answer
	for i := endP; i > -1; i-- {
		start := math.Floor(float64(arr[startP] * arr[startP]))
		end := math.Floor(float64(arr[endP] * arr[endP]))
		fmt.Println(start)
		fmt.Println(end)
		if end > start {
			sqList[i] = int(end)
			endP--
		} else {
			sqList[i] = int(start)
			startP++
		}
	}
	return sqList
}

func main() {
	// two num sum
	array := []int{3, 5, -4, 8, 11, 1, -1, 6}
	targetNum := 8
	fmt.Println(YoOne(array, targetNum))

	// validate sequence
	arrayTwo := []int{5, 1, 22, 25, 6, -1, 8, 10}
	sequence := []int{1, 6, -1, 10}
	fmt.Println(YoTwo(arrayTwo, sequence))

	// sqroot sorted array
	arrayThree := []int{1, 2, 3, 5, 6, 8, 9}
	fmt.Println(YoThree(arrayThree))

}
