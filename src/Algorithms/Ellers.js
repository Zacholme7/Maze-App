import {ROW, COL} from '../components/Grid/Grid'
import {removeWall, newGrid} from './utility'

// used to union to sets
function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}


// maps 2D grid to 1D array
function getPos(cell){
    return (cell.row * COL) + cell.col
}

export function ellers(grid){
    let gridArr = []

    // assign each cell to a set and update corresponding cell/set relation in arr
    let sets = {}
    let gridCellSet = []
    let i = 1
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            if(grid[row][col].visited === false){
                grid[row][col].visited = true // set visited as ture since we will assign it to a set
                sets[i] = new Set()
                sets[i].add(grid[row][col])
                gridCellSet.push(i)
                i+=1
            }
        }
    }

    
    // preform the algorithm
    for(let row = 0; row < ROW - 1; row++){

        // DEALS WITH HORIZONTAL REMOVING AND MERGING
        for(let col = 0; col < COL -1; col++){

            let conditioner = Math.round(Math.random()) // decides if we should carve or not
            if(conditioner){
                
                // merge sets and update mapping
                let set1 = sets[gridCellSet[getPos(grid[row][col])]]
                let set2 = sets[gridCellSet[getPos(grid[row][col+1])]]

                if(set1 != set2){
                    removeWall(grid[row][col], grid[row][col+1])
                    sets[gridCellSet[getPos(grid[row][col+1])]] = union(set1, set2)
                    delete sets[gridCellSet[getPos(grid[row][col])]]
                    
                    // adjust map of cells to sets to adjust for new union
                    let compareVal = gridCellSet[getPos(grid[row][col])]
                    for(let i = 0; i < gridCellSet.length; i++){
                        if(gridCellSet[i] === compareVal){
                            gridCellSet[i] = gridCellSet[getPos(grid[row][col+1])]
                        }
                    }
                }

                gridArr.push(newGrid(grid))
            }
        }

        // DEALS WITH VERTICAL REMOVING AND MERGING
        if(row < ROW -1){
            let hasCarved = false // says if we have carved already or not, used for moving to next set

            // want to loop through the row again
            for(let col = 0; col < COL-1; col++){
                let currSet = sets[gridCellSet[getPos(grid[row][col])]] // set we are currently on 
                let verticalSet = sets[gridCellSet[getPos(grid[row+1][col])]] // the set below the current set
                let nextSet = sets[gridCellSet[getPos(grid[row][col+1])]] // the set to the right of currSet

                // if true, carve down and merge sets
                if(Math.round(Math.random())){
                    removeWall(grid[row][col], grid[row+1][col])
                    sets[gridCellSet[getPos(grid[row][col])]] = union(currSet, verticalSet)
                    delete sets[gridCellSet[getPos(grid[row + 1][col])]]
                    
                    // adjust map of cells to sets to adjust for new union
                    let compareVal = gridCellSet[getPos(grid[row + 1][col])]
                    for(let i = 0; i < gridCellSet.length; i++){
                        if(gridCellSet[i] === compareVal){
                            gridCellSet[i] = gridCellSet[getPos(grid[row][col])]
                        }
                    }
                    gridArr.push(newGrid(grid))

                    hasCarved = true
                } else if(currSet != nextSet && hasCarved == false){
                    // deals with when we are about to swtich sets and havent carved yet
                    removeWall(grid[row][col], grid[row+1][col])
                    sets[gridCellSet[getPos(grid[row][col])]] = union(currSet, verticalSet)
                    delete sets[gridCellSet[getPos(grid[row + 1][col])]]
                    
                    // adjust map of cells to sets to adjust for new union
                    let compareVal = gridCellSet[getPos(grid[row + 1][col])]
                    for(let i = 0; i < gridCellSet.length; i++){
                        if(gridCellSet[i] === compareVal){
                            gridCellSet[i] = gridCellSet[getPos(grid[row][col])]
                        }
                    }
                    gridArr.push(newGrid(grid))
                } 

                // deals with the last cell in the row
                if(col+1 == COL-1){

                    // if the last cell is its own set, we must carve and merge sets
                    if(currSet !== nextSet || hasCarved === false){
                        removeWall(grid[row][col + 1], grid[row+1][col + 1])

                        currSet = sets[gridCellSet[getPos(grid[row][col + 1])]]
                        verticalSet = sets[gridCellSet[getPos(grid[row+1][col + 1])]]
                        
                        sets[gridCellSet[getPos(grid[row][col + 1 ])]] = union(currSet,verticalSet)
                        delete sets[gridCellSet[getPos(grid[row + 1][col + 1])]]
                        
                        // adjust map of cells to sets to adjust for new union
                        let compareVal = gridCellSet[getPos(grid[row + 1][col + 1])]
                        for(let i = 0; i < gridCellSet.length; i++){
                            if(gridCellSet[i] === compareVal){
                                gridCellSet[i] = gridCellSet[getPos(grid[row][col + 1])]
                            }
                        }
                        gridArr.push(newGrid(grid))
                    }
                }

                // reset hasCarved each time we enter a new set
                if(currSet !==  nextSet){
                    hasCarved = false
                }
            }
        }
        gridArr.push(newGrid(grid))
    }

    // remove walls between disjoin sets in the last row
    for(let col = 0; col < COL-1; col++){
        let set1 = sets[gridCellSet[getPos(grid[ROW-1][col])]]
        let set2 = sets[gridCellSet[getPos(grid[ROW-1][col+1])]]
        if(set1 != set2){
            removeWall(grid[ROW-1][col], grid[ROW-1][col + 1])
            gridArr.push(newGrid(grid))
        }
    }
    
    gridArr.push(newGrid(grid))
    return gridArr
}