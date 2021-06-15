import { ROW, COL } from "../components/Grid/Grid"
import { newGrid, getNeighbors, removeWall } from "./utility"


export function growingTree(grid){
    let gridArr = [] // grid arr used for visualization
    let cellList = [] // list to hold all the cells to pull from

    // add starting cell (middle) and mark it as visited
    let currCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // starting cell in the middle
    currCell.visited = true 
    cellList.push(currCell) 

    // can adjust conditioner selection to alternate between a combination of prims and recursive
    // I currently have a 50/50 combination of prims and recursive
    let conditioner = true // conditioner used to alternate between remove from end and middle


    // keep looping while there are still cells left in the list
    while(cellList.length > 0){ 
        let currCellNeighbor = getNeighbors(grid, currCell) // get next unvisited neighbor

        // want to alternate between removing from the end and from the middle
        if(conditioner){
            if(currCellNeighbor){
                removeWall(currCell, currCellNeighbor)
                cellList.push(currCellNeighbor)
                currCellNeighbor.visited = true
                currCell = currCellNeighbor
                currCell.path = true
                gridArr.push(newGrid(grid))
                
            } else{
                // remove from end
                currCell = cellList.pop()
                currCell.path = false
                gridArr.push(newGrid(grid))
            }

        } else{
            let middle = Math.floor(cellList.length /2) // middle index val
            if(currCellNeighbor){
                removeWall(currCell, currCellNeighbor)
                cellList.push(currCellNeighbor)
                currCellNeighbor.visited = true
                currCell = currCellNeighbor
                currCell.path = true
                gridArr.push(newGrid(grid))
                
            } else{
                // remove from middle
                currCell = cellList[middle]
                cellList.splice(middle, 1)
                currCell.path = false
                gridArr.push(newGrid(grid))
            }
        }
        conditioner = !conditioner // flip conditioner for next cycle
    }
    gridArr.push(newGrid(grid))
    return gridArr
}