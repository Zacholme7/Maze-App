

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

const getInitialGrid = () =>{
    const grid = [];
    for(let row = 0; row < 25; row++){
        const currRow = [];
        for(let col = 0; col < 60; col++){
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
        left: true
    }
}

// helper for the getNeighbor function, validates the row, col position
function validate(grid, rowIdx, colIdx){
    if(rowIdx < 0 | colIdx < 0 | rowIdx > 24 | colIdx > 59){
        return -1;
    } else{
        return grid[rowIdx][colIdx];
    }
}

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


function randomWalk(grid, gridArr, currCell){
    while(true){
        currCell.path = true
        let neighbor = getNeighbors(grid, currCell)
        if(neighbor){
            removeWall(currCell, neighbor)
            neighbor.visited = true;
        } else {
            gridArr.push(newGrid(grid))
            currCell.path = false
            return
        }

        gridArr.push(newGrid(grid))
        currCell.path = false
        currCell = neighbor

    }
}

function newGrid(grid){
    const newGrid = [];
    for(let row = 0; row < 25; row++){
        const currRow = [];
        for(let col = 0; col < 60; col++){
            const newNode = {...grid[row][col]}
            currRow.push(newNode);
        }
        newGrid.push(currRow);
    }
    return newGrid;
}


export function huntAndKill(grid, placeholder){
    let gridArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].visited = true
            randomWalk(grid, gridArr, grid[i][j])
        }
    }
    return gridArr
}


const grid = getInitialGrid()
const maze = huntAndKill(grid, grid[0][0])