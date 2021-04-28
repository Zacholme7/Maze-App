//import { newGrid } from "../Algorithms/utility.js"
//import { ROW, COL } from "../components/Grid/Grid.js"

//import { recursiveBack } from "../Algorithms/RecursiveBack"
import {newGrid} from '../Algorithms/utility.js'

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
function isJunction(grid, cell){
    let row = cell.row
    let col = cell.col
    let neighbors = []
    if(cell.top == false){
        if(grid[row-1][col].discard != true){
            neighbors.push(grid[row-1][col])
        }
    }
    if(cell.bottom == false){
        if(grid[row+1][col].discard != true){
            neighbors.push(grid[row+1][col])
        }
    }

    if(cell.right == false){
        if(grid[row][col+1].discard != true){
            neighbors.push(grid[row][col+1])
        }
    }

    if(cell.left == false){
        if(grid[row][col-1].discard != true){
            neighbors.push(grid[row][col-1])
        }
    }
    return neighbors
    /*
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
        if(tempNeighbor[i] != -1 && !tempNeighbor[i].discard){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    
    return validNeighbors;
    */
}

/* helper validation function for getVisited and getUnvisited */

function validate(grid, rowIdx, colIdx){
    if(rowIdx < 0 | colIdx < 0 | rowIdx > 10 - 1 | colIdx > 27 - 1){
        return -1;
    } else{
        return grid[rowIdx][colIdx];
    }
}



/*
function newGrid(grid){
    const newGrid = [];
    for(let row = 0; row < 10; row++){
        const currRow = [];
        for(let col = 0; col < 27; col++){
            const newNode = {...grid[row][col]}
            currRow.push(newNode);
        }
        newGrid.push(currRow);
    }
    return newGrid;
}

const getInitialGrid = () =>{
    const grid = [];
    for(let row = 0; row < 10; row++){
        const currRow = [];
        for(let col = 0; col < 27; col++){
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
        deadEnd: false,
        discard: false
    }
}

function getNeighbors2(grid, cell){
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
        if(tempNeighbor[i] != -1 & !tempNeighbor[i].visited){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
}


function recursiveBack2(grid, starting){
    let stack = [];
    let gridArr = [];
    let curr = starting;
    curr.visited = true;
    curr.path = true;
    stack.push(curr);
    curr.current = true;
    gridArr.push(newGrid(grid));
    while(stack.length > 0){
        const next = getNeighbors2(grid, curr);
        if(next){
            next.visited = true;
            stack.push(next);
            next.path = true;
            removeWall2(curr, next);
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
    return gridArr;
}

function removeWall2(cell1, cell2){
    let y = cell1.row - cell2.row;
    let x = cell1.col - cell2.col;

    if(x == 1){
        cell1.left = false;
        cell2.right = false;
    } else if(x == -1){
        cell1.right = false;
        cell2.left = false;
    } else if(y == 1){
        cell1.top = false;
        cell2.bottom = false;
    } else if(y == -1){
        cell1.bottom = false;
        cell2.top = false;
    }
}
*/

export function deadend(grid,starting){
    let gridArr = []
    let deadEndArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            let neighbors = 0
            if(!((i == 0 && j == 0) || (i == grid.length -1 && j == grid[0].length -1))){
                neighbors = getNumWalls(grid[i][j]) // gets the cells visited neighbors
            }
            if(neighbors == 3 ){
                grid[i][j].deadEnd = true;
                deadEndArr.push(grid[i][j])
                gridArr.push(newGrid(grid))
            }
        }
    }

    console.log(deadEndArr.length)

    while(deadEndArr.length > 0){
        var k = deadEndArr.length
        while(k--){
            if(deadEndArr[k] != undefined){
                let currCell = deadEndArr[k]
                let nextCell = null;
    
                
                if(!currCell.top){
                    nextCell = grid[currCell.row -1][currCell.col]
                } else if(!currCell.bottom){
                    nextCell = grid[currCell.row + 1][currCell.col]
                } else if(!currCell.right){
                    nextCell = grid[currCell.row][currCell.col + 1]
                } else{
                    nextCell = grid[currCell.row][currCell.col - 1]
                }
    
                 let nextNeighbors = isJunction(grid, nextCell)
                
                 console.log(nextNeighbors.length)
                if(nextNeighbors.length > 2){
                    gridArr.push(newGrid(grid))
                    deadEndArr.splice(k, 1)
                    
                } else if(nextNeighbors.length == 1){
                    currCell.discard = true;
                    gridArr.push(newGrid(grid))
                    deadEndArr[k] = nextNeighbors[0]
                   
                }
            } 
        }
    }

    return gridArr

    /*
    while(deadEndArr.length > 0){
        var k = deadEndArr.length
        while(k--){
            let currCell = deadEndArr[k]
            console.log(currCell)
            let nextCell = null;

            
            if(!currCell.top){
                nextCell = grid[currCell.row -1][currCell.col]
            } else if(!currCell.bottom){
                nextCell = grid[currCell.row + 1][currCell.col]
            } else if(!currCell.right){
                nextCell = grid[currCell.row][currCell.col + 1]
            } else{
                nextCell = grid[currCell.row][currCell.col - 1]
            }


    
            let nextNeighbors = isJunction(nextCell)
           
            if(nextNeighbors.length > 1){
                // then you are at a junction
                currCell.discard = true;
                deadEndArr.splice(k, 1)
                
            } else{
                currCell.discard = true;
                deadEndArr[k] = nextNeighbors[0]
            }
 /*

            if(nextWalls == 2){
                currCell.discard = true;
                deadEndArr[k] = nextCell

            } else {
                currCell.discard = true;
                deadEndArr.splice(k, 1)
            }
            
        }
    }

    */
    

    /*
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
    */
    
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



   
    /*
     return gridArr;
        take in a grid
    */
}

/*
const grid = getInitialGrid();
const maze = recursiveBack2(grid, grid[0][0])
const deadEnds = deadend(grid, grid[0][0])
console.log(grid)
*/

