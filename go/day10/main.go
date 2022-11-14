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
    for i := range arr  {
		start := math.Floor(math.Sqrt(float64(arr[startP])))
		end := math.Floor(math.Sqrt(float64(arr[endP])))
		if end > start {
			sqList[i] = int(end)
			end--
		} else {
			sqList[i] = int(start)
            start++
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
