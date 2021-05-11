import { newGrid} from "../Algorithms/utility"
import { ROW, COL} from "../components/Grid/Grid";
import {getFalseWallNeighbor} from "./pathUtility"


function isDeadEnd(cell){
    let walls = []
    // gets dir's in which there is a wall
    if(cell.top === true){
        walls.push(0)
    }
    if(cell.right === true){
        walls.push(1)
    }
    if(cell.bottom === true){
        walls.push(2)
    }
    if(cell.left === true){
        walls.push(3)
    }

    // return true if its a dead end, false otherwise
    if(walls.length === 3){
        return true
    }
    return false
}


export function recursiveSolver(grid){
    let gridArr = [] // grid arr used for visualization
    let stack = [] // stack to hold backtracking

    // visited reset, previous algo changed it
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            grid[row][col].visited = false;
        }
    }

    
    let currCell = grid[0][0] // starting cell at the upper left hand corner
    currCell.visited = true 
    currCell.path = true
    while(currCell !== grid[ROW-1][COL-1]){
        let nextCells = getFalseWallNeighbor(grid, currCell)
        let nextCell = nextCells[Math.floor(Math.random() * nextCells.length)];

        if(nextCell){
            stack.push(currCell)
            nextCell.path = true
            nextCell.visited = true
            gridArr.push(newGrid(grid))
            if(isDeadEnd(nextCell)){
                if(nextCell === grid[ROW-1][COL-1]){
                    currCell = nextCell
                } else{
                    nextCell.path = false
                    currCell = stack.pop() 
                }
            } else{
                currCell = nextCell
            }
        } else{
            currCell.path = false
            currCell = stack.pop()
        }
        gridArr.push(newGrid(grid))
    }

    gridArr.push(newGrid(grid))
    return gridArr
}