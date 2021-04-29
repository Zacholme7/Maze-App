import {getNeighbors, removeWall, newGrid} from './utility'

/* preforms a random walk for the passed cell */
function randomWalk(grid, gridArr, currCell){
    while(true){
        currCell.current = true
        let neighbor = getNeighbors(grid, currCell)
        if(neighbor){
            removeWall(currCell, neighbor)
            neighbor.visited = true;
        } else {
            gridArr.push(newGrid(grid))
            currCell.current = false
            return
        }

        gridArr.push(newGrid(grid))
        currCell.current = false
        currCell = neighbor

    }
}

/* preforms the hunt and kill maze generation algorithm */
export function huntAndKill(grid){
    let gridArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].visited = true
            randomWalk(grid, gridArr, grid[i][j])
        }
    }
    return gridArr
}
