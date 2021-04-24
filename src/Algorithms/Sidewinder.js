import {removeWall, newGrid} from './utility'

/* Implements the sidewinder maze generation algorithm */

function carveCondition(currCell){
    // 1 = carve (east)
    // 0 = dont carve
    
    if(currCell.row == 0){
        return 1 // top row, we only want to carve east
    }

    return (Math.random()>=0.5)? 1 : 0;
}


export function sideWinder(grid, starting){
    let gridArr = []
    for(let i = 0; i < grid.length; i++){
        let run = [] // init the run set to empty at the start of each row
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].current = true;
            run.push(grid[i][j]) // push curr cell to the run set

            let cond = carveCondition(grid[i][j])

            if(cond == 1){
                if( j != 59){
                    removeWall(grid[i][j], grid[i][j+1])
                }
            } else if(cond == 0){
                let random = run[Math.floor(Math.random() * run.length)]
                removeWall(random, grid[i-1][j])
                run = []
            }
            gridArr.push(newGrid(grid))
            grid[i][j].current = false;
        }
    }
    return gridArr
}


