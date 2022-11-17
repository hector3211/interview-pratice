const redShirts = [3,5,6,8,2,1]
const blueShirts = [2,4,7,5,1,6]
function photo(red: number[],blue: number[]) :boolean{
    red.sort().reverse()
    blue.sort().reverse()
    console.log(red)
    console.log(blue)
    let backRow:number []
    let frontRow:number []
    for (let i = 0; i < red.length; i++) {
        if (red[0] > blue[0]){
            backRow = red
            frontRow = blue
        } else {
            backRow = blue
            frontRow = red
        }
        if (backRow[i] > frontRow[i]) {
            return true
        } else {
            return false
        }

    }
    return false
}

console.log(photo(redShirts,blueShirts))



