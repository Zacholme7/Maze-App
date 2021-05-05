import { newGrid, getNeighbors } from "../Algorithms/utility"
import { ROW, COL } from "../components/Grid/Grid"


function getFalseWallNeighbor(grid, cell){
    let noWallDir = []
    // gets dir's in which there is no wall
    if(cell.top == false){
        noWallDir.push(0)
    }
    if(cell.right == false){
        noWallDir.push(1)
    }
    if(cell.bottom == false){
        noWallDir.push(2)
    }
    if(cell.left == false){
        noWallDir.push(3)
    }

    let unvisitedNeighbors = []
    // get unvisited neighbors in proper directions
    for(let i = 0; i < noWallDir.length; i++){
        if(noWallDir[i] == 0){
            if(grid[cell.row-1][cell.col].visited == false){
                unvisitedNeighbors.push(grid[cell.row-1][cell.col])
            }
        } else if(noWallDir[i] == 1){
            if(grid[cell.row][cell.col+1].visited == false){
                unvisitedNeighbors.push(grid[cell.row][cell.col+1])
            }
        } else if(noWallDir[i] == 2){
            if(grid[cell.row+1][cell.col].visited == false){
                unvisitedNeighbors.push(grid[cell.row+1][cell.col])
            }
        } else if(noWallDir[i] == 3){
            if(grid[cell.row][cell.col-1].visited == false){
                unvisitedNeighbors.push(grid[cell.row][cell.col-1])
            }
        } 
    }
    return unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)];;
}

export function recursive(grid){

    // visited reset, previous algo changed it
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            grid[row][col].visited = false;
        }
    }


    let stack = [] // stack for keeping track of visited and path
    let gridArr = [] // gridArr for visualization

    // currentCell init
    let currentCell = grid[0][0] 
    currentCell.visited = true
    currentCell.path = true
    gridArr.push(newGrid(grid));
    stack.push(currentCell)
    let i = 0;
    while(currentCell.row != ROW -1 || currentCell.col != COL-1){
        let nextCell = getFalseWallNeighbor(grid, currentCell)
        console.log(nextCell)
        if(nextCell){
            nextCell.visited = true
            stack.push(nextCell)
            nextCell.path = true
            currentCell = nextCell
        } else{
            currentCell = stack.pop()
            if(!getFalseWallNeighbor(grid, currentCell)){
                currentCell.path = false;
            } else{
                currentCell.path = true;
            }
            
        }
        gridArr.push(newGrid(grid));
    }

    /*
    // loop while not at ending cell
    while(currentCell.row != ROW -1 || currentCell.col != COL-1){
        let nextCell = getFalseWallNeighbor(grid, currentCell)
        if(nextCell != undefined){
            if(nextCell){
                nextCell.visited = true
                stack.push(nextCell)
                nextCell.path = true
                currentCell = nextCell
            } else{
                currentCell = stack.pop()
                currentCell.path = false;
            }
            gridArr.push(newGrid(grid));
        } else{
            currentCell = stack.pop();
        }
    }
    */

    gridArr.push(newGrid(grid));
    return gridArr



    /*
    let stack = [];
    let gridArr = [];
    let curr = grid[Math.floor(ROW/2)][Math.floor(COL/2)];
    curr.visited = true;
    curr.path = true;
    stack.push(curr);
    curr.current = true;
    gridArr.push(newGrid(grid));
    while(stack.length > 0){
        const next = getNeighbors(grid, curr);
        if(next){
            next.visited = true;
            stack.push(next);
            next.path = true;
            removeWall(curr, next);
            curr.current = false
            curr = next;
            curr.current = true
            
        } else {
            curr.current = false
            curr = stack.pop();
            curr.path = false;
            curr.current = true;
            if(stack.length == 0){
                curr.current = false;
            }
        }
        gridArr.push(newGrid(grid));
    }
    gridArr.push(newGrid(grid))
    return gridArr;
    */
}