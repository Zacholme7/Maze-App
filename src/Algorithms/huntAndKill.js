import { ROW, COL } from '../components/Grid/Grid'
import {getNeighbors, removeWall, newGrid, getVisited} from './utility'

/* preforms a random walk for the passed cell */
function randomWalk(grid, gridArr, currCell, remaining){
    while(true){
        currCell.current = true
        let neighbor = getNeighbors(grid, currCell)
        if(neighbor){
            removeWall(currCell, neighbor)
            neighbor.visited = true;
            remaining -= 1
        } else {
            gridArr.push(newGrid(grid))
            currCell.current = false
            return remaining
        }

        gridArr.push(newGrid(grid))
        currCell.current = false
        currCell = neighbor

    }
}

/* preforms the hunt and kill maze generation algorithm */
export function huntAndKill(grid){
    let gridArr = [] // used for visualization
    let remaining = ROW * COL - 1 // remaining cells unvisited
    let currCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // set the starting to the middle of the maze
    currCell.visited = true // mark the current cell as visited
    remaining = randomWalk(grid, gridArr, currCell, remaining) // preform an inital random walk and reassign remaining
  
    // loop while there are still unvisited cells
    while(remaining > 0){
        let stop = false // conditioner to break out of double loop
        for(let row = 0; (row < ROW) && !stop; row++){
            for(let col = 0; col < COL && !stop; col++){
                // get the unvisited neighbors of the current cell
                let visitedNeighbors = getVisited(grid, grid[row][col])
                let visitedNeighbor = visitedNeighbors[Math.floor(Math.random() * visitedNeighbors.length)];

                // if the current cell if unvisited and has a visited neighbor
                // remove the wall and preform a random walk
                // adjust remaining and break out of double loop
                if(grid[row][col].visited === false && visitedNeighbor){
                    removeWall(grid[row][col], visitedNeighbor)
                    grid[row][col].visited = true
                    remaining -= 1
                    remaining = randomWalk(grid, gridArr, grid[row][col], remaining)
                    stop = true
                }
            }
        }
    }
    gridArr.push(newGrid(grid))
    return gridArr
} 
