
import {removeWall, getUnvisited, getVisited, newGrid} from './utility'


export function randomizedPrims(grid, starting){
    starting.visited = true  // set starting cell to visited
    let gridArr = []
    let borderArr = [...getUnvisited(grid, starting)] // get initial border arr
    for(let i = 0; i < borderArr.length; i++){
        borderArr[i].path = true;
    }
     
    while(borderArr.length > 0){
        // get a random border in the border arr
        let randomBorder = borderArr[Math.floor(Math.random() * borderArr.length)]

        // get a random cell that neighbors the border cell that is visited
        // guarenteed to be atleast one
        let randomVisitedArr = getVisited(grid, randomBorder)
        let randomVisited = randomVisitedArr[Math.floor(Math.random() * randomVisitedArr.length)]

        // remove the wall between the border cell and the adjacent visited
        removeWall(randomVisited, randomBorder)

        // market the border cell as visied and remove from border since its part of the maze now
        randomBorder.path = false;
        borderArr.splice(borderArr.indexOf(randomBorder), 1)
        randomBorder.visited = true;

        // add the border of the old border cell to the border array
        let borderAdded = getUnvisited(grid, randomBorder);
        for(let i = 0; i < borderAdded.length; i++){
            borderAdded[i].path = true;
        }

        borderArr = borderArr.concat(borderAdded)
        borderArr = [...new Set(borderArr)]
        gridArr.push(newGrid(grid))

    }
    return gridArr
}





