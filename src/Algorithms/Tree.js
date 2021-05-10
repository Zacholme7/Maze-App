import { ROW, COL } from "../components/Grid/Grid"
import { newGrid, getNeighbors } from "./utility"


export function growingTree(grid){

    let gridArr = [] // grid arr used for visualization
    let currCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // starting cell in the middle
    currCell.visited = true
    let cellList = [] // list to hold all the cells to pull from
    let conditioner = true
    cellList.push(currCell) // add the starting cell to the list 


    while(cellList.length > 0){

        // remove from the end
        let currCell = cellList[-1] // gets the last cell in the list
        let currCellNeighbor = getNeighbors(grid, currCell)

        // want to alternate between removing from the end and from the middle
        if(conditioner){
            // if it has a neighbor add it to the list, else pop the current cell from the list
            if(currCellNeighbor){
                cellList.push(currCellNeighbor)
                currCellNeighbor.visited = true
                currCell = currCellNeighbor
                
            } else{
                currCell = cellList.pop()

            }

        } else{
            // if it has a neighbor add it to the list, else pop the current cell from the list
            let middle = Math.floor(cellList.length /2)
            if(currCellNeighbor){
                cellList.push(currCellNeighbor)
                currCellNeighbor.visited = true
                currCell = currCellNeighbor
                
            } else{
                currCell = cellList[middle]
                cellList.splice(middle, 1)
            }
        }

        // 
        conditioner = !conditioner // flip conditioner for next cycle
    }



    gridArr.push(newGrid(grid))
    return gridArr
}