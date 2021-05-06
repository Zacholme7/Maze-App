

export function getFalseWallNeighbor(grid, cell){
    let noWallDir = []
    // gets dir's in which there is no wall
    if(cell.top == false){
        noWallDir.push(0)
    }
    if(cell.right == false){
        noWallDir.push(1)
    }
    if(cell.bottom == false){
        noWallDir.push(2)
    }
    if(cell.left == false){
        noWallDir.push(3)
    }

    let unvisitedNeighbors = []
    // get unvisited neighbors in proper directions
    for(let i = 0; i < noWallDir.length; i++){
        if(noWallDir[i] == 0){
            if(grid[cell.row-1][cell.col].visited == false){
                unvisitedNeighbors.push(grid[cell.row-1][cell.col])
            }
        } else if(noWallDir[i] == 1){
            if(grid[cell.row][cell.col+1].visited == false){
                unvisitedNeighbors.push(grid[cell.row][cell.col+1])
            }
        } else if(noWallDir[i] == 2){
            if(grid[cell.row+1][cell.col].visited == false){
                unvisitedNeighbors.push(grid[cell.row+1][cell.col])
            }
        } else if(noWallDir[i] == 3){
            if(grid[cell.row][cell.col-1].visited == false){
                unvisitedNeighbors.push(grid[cell.row][cell.col-1])
            }
        } 
    }
    return unvisitedNeighbors;
}