import { ROW, COL } from "../components/Grid/Grid"
import { newGrid, shuffleArray, removeWall } from "./utility"

// loops through the grid and adds all edges to an edge arr
function getAllEdges(grid){
    let edges = []
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            if(col < COL -1){
                edges.push({"x": col, "y": row, "dir": "east"})
            }

            if(row < ROW -1){
                edges.push({"x": col, "y": row, "dir": "south"})
            }
        }
    }
    return edges
}

// used to union to sets
function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

// gets the neighboring cell in the edges direction
function getDirCell(edge, grid){
    let row = edge["y"]
    let col = edge["x"]
    let dir = edge["dir"]

    if(dir === "south"){
        return grid[row+1][col]
    } else {
        return grid[row][col+1]
    }
    
}

// maps 2D grid to 1D array
function getPos(cell){
    return (cell.row * COL) + cell.col
}

// preforms kruskals algorithm
export function kruskals(grid){
    let edges = getAllEdges(grid) // get all of the edges
    edges = shuffleArray(edges) // shuffles all the edges for random removal

    let gridArr = [] // grid arr for visualization

    // set: object to hold the sets of cells
    // gridCellSet: maps cells to sets
    let sets = {}
    let gridCellSet = []
    let i = 1
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            sets[i] = new Set()
            sets[i].add(grid[row][col])
            gridCellSet.push(i)
            i+=1
        }
    }

    // want to keep going while there are still edges to check
    while( edges.length > 0){
        let edge = edges.pop() // remove the last edge, will be random since we shuffled
        let neighbor = getDirCell(edge, grid)
    
        // if the two cells are not in the same set
        if(gridCellSet[getPos(grid[edge.y][edge.x])] !== gridCellSet[getPos(neighbor)]){
            removeWall(grid[edge.y][edge.x], neighbor) // removes the wall between the sets

            // combine the two sets and delete the unneeded one
            let set1 = sets[gridCellSet[getPos(grid[edge.y][edge.x])]]
            let set2 = sets[gridCellSet[getPos(neighbor)]]
            sets[gridCellSet[getPos(neighbor)]] = union(set1, set2)
            delete sets[gridCellSet[getPos(grid[edge.y][edge.x])]]

            // adjust map of cells to sets to adjust for new union
            let compareVal = gridCellSet[getPos(grid[edge.y][edge.x])]
            for(let i = 0; i < gridCellSet.length; i++){
                if(gridCellSet[i] === compareVal){
                    gridCellSet[i] = gridCellSet[getPos(neighbor)]
                }
            }
            gridArr.push(newGrid(grid))
        }
    } 
    return gridArr 
}
