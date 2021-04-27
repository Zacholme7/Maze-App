import { newGrid } from "../Algorithms/utility.js"

//import {newGrid} from '../Algorithms/utility.js'
function getNumWalls(cell){
    let wallCounter = 0
    if(cell.top == true){
        wallCounter += 1
    }
    if(cell.bottom == true){
        wallCounter += 1
    }
    if(cell.right == true){
        wallCounter += 1
    }
    if(cell.left == true){
        wallCounter += 1
    }
    return wallCounter
}

/* gets the cells visited neighbors */
export function isJunction(grid, cell){
    let row = cell.row;
    let col = cell.col;

    let tempNeighbor = [
        validate(grid, row+1, col),
        validate(grid, row-1, col),
        validate(grid, row, col+1),
        validate(grid, row, col-1),
    ]
    let validNeighbors = []
    for(let i = 0; i<tempNeighbor.length; i++){
        if(tempNeighbor[i] != -1 & !tempNeighbor[i].visitedPath & !tempNeighbor[i].visitedCurr){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors;
}

/* helper validation function for getVisited and getUnvisited */
export function validate(grid, rowIdx, colIdx){
    if(rowIdx < 0 | colIdx < 0 | rowIdx > 25 - 1 | colIdx > 55 - 1){
        return -1;
    } else{
        return grid[rowIdx][colIdx];
    }
}

export function deadend(grid,starting){
    let gridArr = []
    let deadEndArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            let neighbors = 0
            if((i != 0 && j != 0) || (i != grid.length -1 && j != grid[0].length -1)){
                neighbors = getNumWalls(grid[i][j]) // gets the cells visited neighbors
            }
            if(neighbors == 3){
                grid[i][j].visitedCurr = true;
                deadEndArr.push(grid[i][j])
                gridArr.push(newGrid(grid))
            }
        }
    }

    while(deadEndArr.length > 0){
        var k = deadEndArr.length
        while(k--){
            let currCell = deadEndArr[k]
            let cellArr = null
            if(!currCell.top){
                cellArr = grid[currCell.row -1][currCell.col]
            } else if(!currCell.bottom){
                cellArr = grid[currCell.row + 1][currCell.col]
            } else if(!currCell.right){
                cellArr = grid[currCell.row][currCell.col + 1]
            } else{
                cellArr = grid[currCell.row][currCell.col - 1]
            }


            if(cellArr.length > 1){
                currCell.visitedPath = true
                currCell.isVisitedCurr = false;
                deadEndArr.splice(k, 1)

            } else {
                currCell.visitedPath = true
                currCell.isVisitedCurr = false;
                deadEndArr[k] = cellArr[0]
                deadEndArr[k].isVisitedCurr = true;
            }

        }
    }
    
    /* okay i now have an array of all the dead ends, I want to loop through each one and check if its
    at a junction or no 
    // if its at a junction, i want to set it to pathVisited and remove from array
    // if its not at a junction, i want to advance it forward and set previous to pathVisited
for(let k = 0; k < deadEndArr.length; k++){
        // get the unvisited cell in front
        // check the number of unvisited that the next cell has
        // if it has only one, we can advance out cell
        // if it has more than one, it is a junction and we pop the current cell

    }
    


   
    */



    return gridArr;
    /*
        take in a grid
    */
}

/*

const getInitialGrid = () =>{
    const grid = [];
    for(let row = 0; row < 10; row++){
        const currRow = [];
        for(let col = 0; col < 10; col++){
            currRow.push(createNode(col, row));
        }
        grid.push(currRow);
    }
    return grid;
}

const createNode = (col, row) => {
    return {
        col: col, 
        row: row,
        visited: false,
        path: false,
        current: false,
        top: true,
        bottom: true,
        right: true,
        left: true,
        deadEnd: false
    }
}


const grid = getInitialGrid();
const maze = deadend(grid)
console.log(maze)

*/