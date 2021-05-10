import { ROW, COL } from "../components/Grid/Grid"
import { removeWall, newGrid, getRandomNeighbor } from "./utility";

/* EXTREMELY INEFFICIENT ALGORITHM */ 
export function aldousBroder(grid){

    let currCell = grid[Math.floor(ROW/2)][Math.floor([COL/2])] // starting cell in middle
    currCell.visited = true
    let remaining = ROW * COL - 1; // remaining cells left unvisited
    let gridArr = [] // used for visualization

    while(remaining > 0){
        let neighbor = getRandomNeighbor(grid, currCell)
        if(neighbor.visited == false){
            neighbor.visited = true
            remaining -= 1
            removeWall(currCell, neighbor)
        }
        currCell.path = true
        gridArr.push(newGrid(grid))
        currCell.path = false
        currCell = neighbor
    }
    return gridArr
}