import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min"
import { ROW, COL } from "../components/Grid/Grid"
import { newGrid, shuffleArray, removeWall } from "./utility"

function getAllEdges(grid){
    let edges = []
    let cells = {}
    let i = 1
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
            cells[i] = grid[row][col]

            if(col < COL -1){
                edges.push({"x": col, "y": row, "dir": "east"})
            }

            if(row < ROW -1){
                edges.push({"x": col, "y": row, "dir": "south"})
            }
            i+= 1
        }
    }
    return edges
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function getDirCell(edge, grid){
    let row = edge["y"]
    let col = edge["x"]
    let dir = edge["dir"]

    if(dir == "south"){
        return grid[row+1][col]
    } else {
        return grid[row][col+1]
    }
    
}


// maps 2D grid to 1D array
function getPos(cell){
    return (cell.row * COL) + cell.col
}


export function kruskals(grid){
    let edges = getAllEdges(grid) // get all of the edges
    edges = shuffleArray(edges) // shuffles all the edges for random removal

    let gridArr = [] // grid arr for visualization

    // init all cells to be in their own sets initially
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
    console.log("ran")
    let x = 0
    while( x < 10){
        let edge = edges.pop()
        let neighbor = getDirCell(edge, grid)
    
    
        if(gridCellSet[getPos(grid[edge.y][edge.x])] != gridCellSet[getPos(neighbor)]){
            removeWall(grid[edge.y][edge.x], neighbor) // removes the wall between the sets
        
            // update all the sets mapping
            sets[getPos(grid[edge.y][edge.x]) + 1 ] = union(sets[gridCellSet[getPos(grid[edge.y][edge.x])] +1], sets[gridCellSet[getPos(neighbor)]])
            gridCellSet[getPos(neighbor)] = gridCellSet[getPos(grid[edge.y][edge.x])]
            delete sets[getPos(neighbor) + 1]
            gridArr.push(newGrid(grid))
        }
        console.log("ran")
        x += 1
    }
    
   
    /*
    while (edges.length > 0){
        let edge = edges.pop()
        let neighbor = getDirCell(edge, grid)
        
        check if they are in the same set
        if(gridCellSet[getPos(grid[edge.y][edge.x])] != gridCellSet[getPos(neighbor)]){
            removeWall(grid[edge.y][edge.x], neighbor) // removes the wall between the sets

            // update the gridCellSet mapping
            gridCellSet[getPos(neighbor)] = gridCellSet[getPos(grid[edge.y][edge.x], neighbor))]

            // join the sets, in this case merge 15 into 14

            gridArr.push(newGrid(grid))
        }
   
       
    }

    */
    //while(edges.length > 0){
        // get a random edge, can pop off end since its random
        // if the cell and the cell in the directio nare not in the same set
        //et edge = edges.pop()
        //let cellNeighbor = getDirCell(edge, grid)
        /*
        if(edge and cellNeighbor are not in the same set){
            removeWall(edge, cellNeighbor)
            mergeSet(edge, cellNeighbor)
        }
        */
       
        
        // remove the wall for the edge, aka cell and teh directoin
        // add the cell and the removed wall's cell to the same "set"

    //}
    
    gridArr.push(newGrid(grid))
    return gridArr
}


// what could i use to store set