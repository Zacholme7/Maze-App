import {removeWall, newGrid} from './utility'

function northWestNeightbor(cell){
    // north == 1, 
    // west = 2
    let row = cell.row
    let col = cell.col
    if(row === 0 && col === 0){
        return
    }
    
    if(row === 0){
        return 2
    } else if(col === 0 && row > 0){
        return 1
    } 
    return Math.floor(Math.random() * (2 - 1 + 1) + 1);
}


export function binaryTree(grid){
    // loop through entire grid
    let gridArr = []
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].current = true;
            
            let cond = northWestNeightbor(grid[i][j])
            if( cond === 1){
                removeWall(grid[i-1][j], grid[i][j])
            }
            if (cond === 2){
                removeWall(grid[i][j-1], grid[i][j])
            }
            gridArr.push(newGrid(grid))
            grid[i][j].current = false;
        }

    }
    gridArr.push(newGrid(grid))
    return gridArr
}
