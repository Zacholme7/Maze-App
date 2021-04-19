function northWestNeightbor(cell){
    // north == 1, 
    // west = 2
    let row = cell.row
    let col = cell.col
    if(row == 0 && col == 0){
        return
    }
    
    if(row == 0){
        return 2
    } else if(col == 0 && row > 0){
        return 1
    } 
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
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


export function binaryTree(grid, placeholder){
    // loop through entire grid
    let gridArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].current = true;
            
            let cond = northWestNeightbor(grid[i][j])
            if( cond == 1){
                removeWall(grid[i-1][j], grid[i][j])
            }
            if (cond == 2){
                removeWall(grid[i][j-1], grid[i][j])
            }
            gridArr.push(newGrid(grid))
            grid[i][j].current = false;
        }

    }

    grid[24][59].current = false;
    return gridArr
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

const grid = getInitialGrid()
const maze = binaryTree(grid)