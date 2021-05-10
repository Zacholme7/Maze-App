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



function walk(grid, cell, gridArr){
    while(true){
        let nextCell = getNeighbors(grid, cell)
        if(nextCell){
            removeWall(cell,  nextCell)
            nextCell.visited = true
            cell = nextCell
            gridArr.push(newGrid(grid))
        } else{
            return;
        }
    }
}

function hunt(grid){
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            if(grid[row][col].visited == false){
                return grid[row][col]
            }
        }
    }
}
/* preforms the hunt and kill maze generation algorithm */
export function huntAndKill(grid){


    let gridArr = [] // used for visualization
    let remaining = ROW * COL - 1 // remaining cells unvisited
    console.log(remaining)
    let currCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // set the starting to the middle of the maze
    currCell.visited = true // mark the current cell as visited
    remaining = randomWalk(grid, gridArr, currCell, remaining) // preform an inital random walk and reassign remaining
  
    while(remaining > 0){
        let stop = false
        for(let row = 0; (row < ROW) && !stop; row++){
            for(let col = 0; col < COL && !stop; col++){
                let visitedNeighbors = getVisited(grid, grid[row][col])
                let visitedNeighbor = visitedNeighbors[Math.floor(Math.random() * visitedNeighbors.length)];
                if(grid[row][col].visited == false && visitedNeighbor){
                    removeWall(grid[row][col], visitedNeighbor)
                    grid[row][col].visited = true
                    remaining -= 1
                    remaining = randomWalk(grid, gridArr, grid[row][col], remaining)
                    stop = true
                }
            }
        }

    }
    
    
    // loop while there are still unvisited cells
    /*
    while(remaining > 0){
        // loop through grid and look for unvisited cell with visited neighbor
        
    }

    */



    gridArr.push(newGrid(grid))
    return gridArr

    /*
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            grid[row][col].path = true
        }
        gridArr.push(newGrid(grid))
        for(let col = 0; col < COL; col++){
            grid[row][col].path = false
        }
    }

    gridArr.push(newGrid(grid))
    return gridArr
*/
    /*

    let currCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)]
    
    let gridArr = []
    while(true){
        currCell.visited = true
        walk(grid, currCell, gridArr)
        currCell = hunt(grid)
        console.log(currCell)
        if(!currCell){
            break
        }
        

    }

    return gridArr

   
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j].visited = false){

            }
            grid[i][j].visited = true
            grid[i][j].current = true;
            gridArr.push(newGrid(grid))
            grid[i][j].current = false
            /*
            randomWalk(grid, gridArr, grid[i][j])
        

        }
        

        */
    
}
