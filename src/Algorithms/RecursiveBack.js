/* Preforms the recursive backtracking maze generation algorithm */
const lodashClonedeep = require("lodash.clonedeep");

// returns a valid neighbor of the passed cell if there is one
function getNeighbors(grid, cell){
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

// helper for the getNeighbor function, validates the row, col position
function validate(grid, rowIdx, colIdx){
    if(rowIdx < 0 | colIdx < 0 | rowIdx > 19 | colIdx > 19){
        return -1;
    } else{
        return grid[rowIdx][colIdx];
    }
}


// removes the wall between the 2 cells passed as arguments, will always be valid neighbors
function removeWall(cell1, cell2){
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


// preforms the backtracking algorithm
export function recursiveBack(grid, starting){
    let stack = [];
    let gridArr = [];
    let curr = starting;
    curr.visited = true;
    curr.path = true;
    stack.push(curr);
    gridArr.push(lodashClonedeep(grid));
    while(stack.length > 0){
        let next = getNeighbors(grid, curr);
        if(next){
            next.visited = true;
            stack.push(next);
            next.path = true;
            removeWall(curr, next);
            curr = next;
            gridArr.push(lodashClonedeep(grid));
        } else {
            curr = stack.pop();
            curr.path = false;
            gridArr.push(lodashClonedeep(grid));
            
        }
    }
    return gridArr;
}

