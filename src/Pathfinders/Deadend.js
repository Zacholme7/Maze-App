import { ROW, COL } from '../components/Grid/Grid.js';
import { getFalseWallNeighbor } from './pathUtility'

import { newGrid } from "../Algorithms/utility"


function numWalls(cell){
    let count = 4
    if(cell.left == false){
        count -= 1
    }
    if(cell.right == false){
        count -= 1
    }
    if(cell.top == false){
        count -= 1
    }
    if(cell.bottom == false){
        count -= 1
    }

    return count

}


export function deadend(grid){
    let gridArr = [] // hold the grid updates
    let deadEnds = [] // hold all the deadend cells

    // visited reset, previous algo changed it
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            grid[row][col].visited = false;
        }
    }


    // get all the initial deadEnds and add their only neighbor to the array
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            if(!(row == 0 & col == 0) & !(row == ROW-1 & col == COL-1)){
                if(numWalls(grid[row][col]) == 3){
                    grid[row][col].path = true;
                    grid[row][col].visited = true;
                    gridArr.push(newGrid(grid))
                    deadEnds.push(getFalseWallNeighbor(grid, grid[row][col])[0])
                }
            }
        }
    }


    while(deadEnds.length > 0){
        for(let i = deadEnds.length - 1; i >= 0; i--){
            let unvisited = getFalseWallNeighbor(grid, deadEnds[i])
            if(unvisited.length == 0 || unvisited.length > 1){
                deadEnds.splice(i, 1)
            
            }else if((deadEnds[i].row == 0 && deadEnds[i].col == 0) || (deadEnds[i].row == ROW-1 && deadEnds[i].col == COL-1) ){
                deadEnds.splice(i, 1)
            }else if((unvisited[0].row == 0 && unvisited[0].col == 0) || (unvisited[0].row == ROW-1 && unvisited[0].col == COL-1) ){
                deadEnds[i].visited = true;
                deadEnds[i].path = true;
                deadEnds.splice(i, 1) 
            } else{
                deadEnds[i].path = true;
                deadEnds[i].visited = true;
                deadEnds[i] = unvisited[0]
            }
        }
        gridArr.push(newGrid(grid))
    }



    return gridArr;
}
