

/* Randomized Prims Algorithm for maze generation */
function getUnvisited(grid, cell){
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
    return validNeighbors;
}

function getVisited(grid, cell){
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
        if(tempNeighbor[i] != -1 & tempNeighbor[i].visited){
            validNeighbors.push(tempNeighbor[i])
        }

    }
    return validNeighbors;
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


export function randomizedPrims(grid, starting){
    starting.visited = true  // set starting cell to visited
    let gridArr = []
    let borderArr = [...getUnvisited(grid, starting)] // get initial border arr
    for(let i = 0; i < borderArr.length; i++){
        borderArr[i].path = true;
    }



    

     
    while(borderArr.length > 0){
        // get a random border in the border arr
        let randomBorder = borderArr[Math.floor(Math.random() * borderArr.length)]

        // get a random cell that neighbors the border cell that is visited
        // guarenteed to be atleast one
        let randomVisitedArr = getVisited(grid, randomBorder)
        let randomVisited = randomVisitedArr[Math.floor(Math.random() * randomVisitedArr.length)]

        // remove the wall between the border cell and the adjacent visited
        removeWall(randomVisited, randomBorder)

        // market the border cell as visied and remove from border since its part of the maze now
        randomBorder.path = false;
        borderArr.splice(borderArr.indexOf(randomBorder), 1)
        randomBorder.visited = true;

        // add the border of the old border cell to the border array
        let borderAdded = getUnvisited(grid, randomBorder);
        for(let i = 0; i < borderAdded.length; i++){
            borderAdded[i].path = true;
        }

        borderArr = borderArr.concat(borderAdded)
        borderArr = [...new Set(borderArr)]
        gridArr.push(newGrid(grid))

        

    }
    
    return gridArr
}





