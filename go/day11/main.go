package main

import (
	"fmt"
)

func Dude(arr []int) []int {
	return arr[:len(arr)-2]
}

type Dict struct {
	Name  string
	Score int
}

func Win(teams [][]string, res []int) string {
	inLead := Dict{Name: "", Score: -1}
	scores := make(map[string]int)
	winneridx := 0
	for i := range res {
		fmt.Println(i)
		if res[i] == 0 {
			winneridx = 1
		} else {
			winneridx = 0
		}
		currentWinner := teams[i][winneridx]
		if _, ok := scores[currentWinner]; ok {
			scores[currentWinner] += 3
		} else {
			scores[currentWinner] = 3
		}
		if inLead.Score < scores[currentWinner] {
			inLead.Name = currentWinner
			inLead.Score = scores[currentWinner]
		}
	}
	return inLead.Name
}

func main() {
	fmt.Println("hello world!")
	list := []int{1, 2, 3, 4, 5}
	fmt.Println(Dude(list))

	// it sucks i have to do this in golang
	listTeams := [][]string{}
	n1 := []string{"Html", "C#"}
	n2 := []string{"C#", "Python"}
	n3 := []string{"Python", "Html"}
	listTeams = append(listTeams, n1)
	listTeams = append(listTeams, n2)
	listTeams = append(listTeams, n3)
	//

	fmt.Println(listTeams)
	results := []int{0, 0, 1}
	fmt.Println(Win(listTeams, results))
}
