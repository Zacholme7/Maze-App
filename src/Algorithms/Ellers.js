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

    
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL -1; col++){


            let conditioner = Math.round(Math.random())
            if(conditioner){
                removeWall(grid[row][col], grid[row][col+1])
                
                // merge sets and update mapping
                let set1 = sets[gridCellSet[getPos(grid[row][col])]]
                let set2 = sets[gridCellSet[getPos(grid[row][col+1])]]
                console.log(set1, set2)
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
        }

        if(row < ROW -1){
            console.log("ran")
        }

        
        gridArr.push(newGrid(grid))
    }
    /*
    for(let row = 0; row < 2; row++){
        let sets = {}
        let gridCellSet = []
        let i = 1
        for(let col = 0; col < COL; col++){
            // assign row to their own sets 
            // map the cells to their sets 
            if(grid[row][col].visited === false){
                grid[row][col].visited = true // set visited as ture since we will assign it to a set
                sets[i] = new Set()
                sets[i].add(grid[row][col])
                gridCellSet.push(i)
                i+=1
            }
        }
        console.log(sets)
        console.log(gridCellSet)

        
        // go through row and assign 
        for(let col = 0; col < COL -1; col++){
            let conditioner = Math.round(Math.random())
            if(conditioner){
                removeWall(grid[row][col], grid[row][col+1])
                // merge sets and update mapping
                let set1 = sets[gridCellSet[getPos(grid[row][col])] % COL]
                let set2 = sets[gridCellSet[getPos(grid[row][col+1])] % COL]
                
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
        }
        
        gridArr.push(newGrid(grid))
    }
    */




    /*
    init cells to each be in their own set
     randomly join adjacent sets if they are not in the same set
     randomly create vertical connections for each set, atleast one, add cells of vertical connnection into set
     put remaining cells into own set
     
    */
    gridArr.push(newGrid(grid))


    return gridArr
}