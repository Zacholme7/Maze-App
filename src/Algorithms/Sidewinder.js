function carveConditioner(currCell){
    // 1 = carve (east)
    // 0 = dont carve
    
    if(cell.row == 0){
        return 1 // top row, we only want to carve east
    }

    return (Math.random()>=0.5)? 1 : 0;
}

function sideWinder(grid, starting){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            
        }
    }
}