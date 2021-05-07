import { ROW, COL } from '../components/Grid/Grid'
import {getNeighbors, removeWall, newGrid, getVisited} from './utility'

/* preforms a random walk for the passed cell */
function randomWalk(grid, gridArr, currCell){
    while(true){
        currCell.current = true
        let neighbor = getNeighbors(grid, currCell)
        if(neighbor){
            removeWall(currCell, neighbor)
            neighbor.visited = true;
        } else {
            gridArr.push(newGrid(grid))
            currCell.current = false
            return
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

   
    /*
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
