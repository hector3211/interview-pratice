package main

import (
	"fmt"
	"testing"
)

func main () {
    fmt.Println("hellow")
    array := []int{5,1,2,3}
    fmt.Println(Yoo(array))
                fmt.Println()
    fmt.Println(Yo2(array))
}

type MyType interface{
    ~int | ~string
}
func Yoo[T MyType](arr []T) []T{
    var list []T
    for _,n := range arr{
        list = append(list,n + T(1))
    }
    return list
}

func Yo2[T MyType](arr []T) []T{
    list := make([]T,len(arr))
    const one int = 1
    for i,v := range arr{
        list[i] = v + T(1)
    }
    return list
}

func Yo3(arr []int) []int {
    list := make([]int, len(arr))
    for i,v := range arr{
                    list[i] = v + 1
    }
    return list
}


