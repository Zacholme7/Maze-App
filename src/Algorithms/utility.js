import {ROW, COL} from '../components/Grid/Grid.js'

/* removes the wall between cell1 and cell 2 */
export function removeWall(cell1, cell2){
    let y = cell1.row - cell2.row;
    let x = cell1.col - cell2.col;

    if(x === 1){
        cell1.left = false;
        cell2.right = false;
    } else if(x === -1){
        cell1.right = false;
        cell2.left = false;
    } else if(y === 1){
        cell1.top = false;
        cell2.bottom = false;
    } else if(y === -1){
        cell1.bottom = false;
        cell2.top = false;
    }
}

/* get the cells unvisited neighbors */
export function getUnvisited(grid, cell){
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
        if(tempNeighbor[i] !== -1 & !tempNeighbor[i].visited){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors;
}

/* gets the cells visited neighbors */
export function getVisited(grid, cell){
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
        if(tempNeighbor[i] !== -1 & tempNeighbor[i].visited){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors;
}

/* helper validation function for getVisited and getUnvisited */
export function validate(grid, rowIdx, colIdx){
    if(rowIdx < 0 | colIdx < 0 | rowIdx > ROW - 1 | colIdx > COL - 1){
        return -1;
    } else{
        return grid[rowIdx][colIdx];
    }
}

/* returns one unvisited neighbor of the passed cell */
export function getNeighbors(grid, cell){
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
        if(tempNeighbor[i] !== -1 & !tempNeighbor[i].visited){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
}

/* returns one neighbor of the passed cell */
export function getRandomNeighbor(grid, cell){
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
        if(tempNeighbor[i] !== -1){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
}


/* makes a deep copy of the grid */
export function newGrid(grid){
    const newGrid = [];
    for(let row = 0; row < ROW; row++){
        const currRow = [];
        for(let col = 0; col < COL; col++){
            const newNode = {...grid[row][col]}
            currRow.push(newNode);
        }
        newGrid.push(currRow);
    }
    return newGrid;
}

// initial shuffle of array for random remove
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
