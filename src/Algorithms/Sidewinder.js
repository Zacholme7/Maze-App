function carveConditioner(currCell){
    // 1 = carve (east)
    // 0 = dont carve
    
    if(cell.row == 0){
        return 1 // top row, we only want to carve east
    }

    return (Math.random()>=0.5)? 1 : 0;
}

function sideWinder(grid, starting){
    let currCell = starting
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            
            let cond = carveConditioner(grid[i][j])
            if(cond == 1){
                if(col < 59 - 1){
                    removeWall(grid[i][j], grid[i][j+1])
                }
            } else{

            }
        }
    }
}

