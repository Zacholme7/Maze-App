/* Implements the sidewinder maze generation algorithm */

function carveCondition(currCell){
    // 1 = carve (east)
    // 0 = dont carve
    
    if(currCell.row == 0){
        return 1 // top row, we only want to carve east
    }


    return (Math.random()>=0.5)? 1 : 0;
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


function sideWinder(grid, starting){
    for(let i = 0; i < grid.length; i++){
        let run = [] // init the run set to empty at the start of each row
        for(let j = 0; j < grid[0].length; j++){

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
        }
    }
    return grid
}


