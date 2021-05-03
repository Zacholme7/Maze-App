import { ROW, COL } from '../components/Grid/Grid.js';
import { getNeighbors, newGrid, removeWall } from './utility.js';

const getInitialGrid = () =>{
    const grid = [];
    for(let row = 0; row < ROW; row++){
        const currRow = [];
        for(let col = 0; col < COL; col++){
            currRow.push(createNode(col, row));
        }
        grid.push(currRow);
    }
    return grid;
}

const createNode = (col, row) => {
    return {
        starting: false, // the starting node
        ending: false, // the ending node
        col: col, // column of the cell
        row: row, // row of the cell
        visited: false, // has the cell been visited already
        path: false, // is the cell part of the current path
        current: false, // is the cell the current one
        top: true, // top wall
        bottom: true, // bottom wall
        right: true, // right wall
        left: true, // left wall
        doublePath: false // double path when you backtrack in pathfinding
    }
}

// gets the direction of the second cell in relation to the first cell
function getDirection(firstCell, secondCell){
    let x = firstCell.row - secondCell.row
    let y = firstCell.col - secondCell.col 

    // 0: north
    // 1: east
    // 2: south
    // 3: west
    if(x > 0){
        return 0
    }else if(x < 0){
        return 2
    }else if(y > 0){
        return 3
    }else if(y < 0){
        return 1
    }
}

// removes the wall of the cell and the cell in the passed direction
function removeWallDirection(cell, direction, grid){

    if(direction = 0){
        // north 
        removeWall(cell, grid[cell.row-1][cell.col])
    } else if(direction = 1){
        // east
        removeWall(cell, grid[cell.row][cell.col+1])
    } else if(direction = 2){
        // south
        removeWall(cell, grid[cell.row+1][cell.col])
    } else if(direction = 3){
        // west
        removeWall(cell, grid[cell.row][cell.col-1])
    }
}


// wilsons maze generation algorithm
export function wilsons(grid){
    // mazeObj to keep track of all cells in grid and if they are already in maze
    let mazeObj = {}
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
           mazeObj[grid[row][col]] = false
        }
    }

    let gridArr = [] // grid array to hold updated grids
    let currentCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // sets starting to middle of maze
    mazeObj[currentCell] = true // this random cell, middle, is now part of the maze
    let counter = ROW * COL - 1 // how many cells are left to be part of the maze
    
    let randRow = Math.floor(Math.random() * ROW)
        let randCol = Math.floor(Math.random() * COL)
        currentCell = grid[randRow][randCol]
        counter -= 1 // can decrement a counter since this will 100% be a start for the path
        console.log(mazeObj)
        // loop while rand is not in the maze
       

    /*
    // want to keep looping while we have more cells left in the maze
    while(counter > 0){
        let pathObj = {} // will hold the path to trace back

        // pick unvisited cell, do this at the start of every random walk
        let randRow = Math.floor(Math.random() * ROW)
        let randCol = Math.floor(Math.random() * COL)
        let currentCell = grid[randRow][randCol]
        let pathCell = currentCell // used for path unwarp
        counter -= 1 // can decrement a counter since this will 100% be a start for the path

        // loop while rand is not in the maze
        while(mazeObj[currentCell] != true){
            let nextCell = getNeighbors(currentCell) // this will give me a neighbor of the random startin cell
            // check if that cell is already in the maze
            if(mazeObj[nextCell] == true){
                pathObj[nextCell] = 4 // ending, this cell is in the maze
                break
            } else{
                // want to update current path of cells, wtih dirctions
                let direction = getDirection(currentCell, nextCell)
                pathObj[currentCell] = direction
            }

            currentCell = nextCell // reset the current cell
        }

        // want to unwrap pathObj and remove walls
        while(pathObj[pathCell] != 4){

            if(pathObj[pathCell] = 0){
                removeWallDirection(pathCell, 0, grid)
                counter -= 1
                mazeObj[pathCell] = true
                pathCell = grid[pathCell.row -1][pathCell.col]
            } else if(pathObj[pathCell] = 1){
                removeWallDirection(pathCell, 1, grid)
                counter -= 1
                mazeObj[pathCell] = true
                pathCell = grid[pathCell.row][pathCell.col+1]
            } else if(pathObj[pathCell] = 2){
                removeWallDirection(pathCell, 2, grid)
                counter -= 1
                mazeObj[pathCell] = true
                pathCell = grid[pathCell.row +1][pathCell.col]
            } else if(pathObj[pathCell] = 3){
                removeWallDirection(pathCell, 3, grid)
                counter -= 1
                mazeObj[pathCell] = true
                pathCell = grid[pathCell.row][pathCell.col-1]
            }
        }

    }
    */
    gridArr.push(newGrid(grid))
    return gridArr
}

