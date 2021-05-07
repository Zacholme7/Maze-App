import { newGrid } from "../Algorithms/utility"
import { ROW, COL } from "../components/Grid/Grid";
import { getFalseWallNeighbor } from "./pathUtility"


// maps 2D grid to 1D array
function getPos(cell){
    return (cell.row * COL) + cell.col
}

export function depthSearch(grid){
    let gridCells = []
    // visited reset, previous algo changed it
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            grid[row][col].visited = false;
            gridCells.push(grid[row][col]) // maps 2D grid to 1D for O(1) position lookup
        }
    }

    let gridArr = [] // array of grids used for visualization
    let pathObj = {} // holds the path of cells, used for backtracking solution
    let current = grid[0][0]
    current.visited = true
    current.path = true
    let notExplored = [] // holds all the cells that need to be explored
    notExplored.push(current) // push the inital cell into not explored

    // while there are cells that have not been explored
    while(notExplored.length > 0){
        let currNeighbors = getFalseWallNeighbor(grid, current)
        for(let i = 0; i < currNeighbors.length; i++){
            if(currNeighbors[i] != undefined){
                currNeighbors[i].path = true
                currNeighbors[i].visited = true
                currNeighbors[i].doublePath = true;

                pathObj[getPos(currNeighbors[i])] = getPos(current)
                notExplored.push(currNeighbors[i])
            }
        }
        current = notExplored.pop();
        current.doublePath = false;
        gridArr.push(newGrid(grid)) 
    }

    let backtrackPos = getPos(grid[ROW-1][COL-1])
    gridCells[backtrackPos].path = false
    gridArr.push(newGrid(grid)) 
    while(backtrackPos != 0){
        let currBacktrack = pathObj[backtrackPos]
        gridCells[currBacktrack].path = false
        backtrackPos = currBacktrack
        gridArr.push(newGrid(grid)) 
    }
    return gridArr;
}