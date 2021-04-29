import { newGrid } from "../Algorithms/utility"

// function that is passed the current direction and returns a list of the direction 
// priorities in accordance with the left hand rule
function getDirectionPriority(currDirection){
    if(currDirection == "north"){
        return ["west", "north", "east", "south"]
    } else if(currDirection == "east"){
        return ["north", "east", "south", "west"]

    } else if(currDirection == "south"){
        return ["east", "south", "west", "north"]

    } else if(currDirection == "west"){
        return ["south", "west", "north", "east"]
    }
}

// left hand rule follower algorithm for maze solving
export function wallFollower(grid, starting, ending){
    let direction = "north" // initial starting direction
    let directions = [] // array of the directions in priority based on curr direction
    let solutionStack = [] // stack containing the solution
    let gridArr = [] // store the list of grid sequences for rendering
    
    let currentCell = starting // init the current cell
    currentCell.path = true // current cell is on the path
    solutionStack.push({"cell": currentCell, "direction": direction}) // push starting/current to stack since it will always be a solution

    gridArr.push(newGrid(grid)) // push new grid copy

    // loop while you have not reached the end
    while(currentCell != ending){

        // get the current row and col, used for updating position
        let currentRow = currentCell.row
        let currentCol = currentCell.col

        // using the left hand rule, so set direction priorities
        directions = getDirectionPriority(direction)

        // have the directions in the priority you want to move
        // loop through directins and move with highest priority
        for(let i = 0; i < directions.length; i++){
            if(directions[i] == "north"){

                // if there is no wall, we want to move that way
                if(currentCell.bottom == false){
                    direction = "north" // set direction to highest priority valid direction
                    currentCell = grid[currentRow + 1][currentCol]
                    // if its the opposite of where we just went, it's a dead end
                    if("south" == solutionStack[solutionStack.length-1].direction){
                        let removedCell = solutionStack.pop()
                        removedCell.cell.doublePath = true
                        gridArr.push(newGrid(grid))
                    } else{
                        solutionStack.push({"cell": currentCell, "direction": direction})
                        currentCell.path = true;
                        gridArr.push(newGrid(grid))
                    }
                    break;
                }
            } else if(directions[i] == "east"){
                if(currentCell.left == false){
                    direction = "east"
                    currentCell = grid[currentRow][currentCol - 1]
                    if("west" == solutionStack[solutionStack.length-1].direction){
                        let removedCell = solutionStack.pop()
                        removedCell.cell.doublePath = true
                        gridArr.push(newGrid(grid))
                    } else{
                        solutionStack.push({"cell": currentCell, "direction": direction})
                        currentCell.path = true;
                        gridArr.push(newGrid(grid))
                    }
                    break;
                }
            } else if(directions[i] == "south"){
                if(currentCell.top == false){
                    direction = "south"
                    currentCell = grid[currentRow - 1][currentCol]
                    if("north" == solutionStack[solutionStack.length-1].direction){
                        let removedCell = solutionStack.pop()
                        removedCell.cell.doublePath = true
                        gridArr.push(newGrid(grid))
                    }else{
                        solutionStack.push({"cell": currentCell, "direction": direction})
                        currentCell.path = true;
                        gridArr.push(newGrid(grid))
                    }
                    break;
                }
            } else if(directions[i] == "west"){
                if(currentCell.right == false){
                    direction = "west"
                    currentCell = grid[currentRow][currentCol + 1]
                    if("east" == solutionStack[solutionStack.length-1].direction){
                        let removedCell = solutionStack.pop()
                        removedCell.cell.doublePath = true
                        gridArr.push(newGrid(grid))
                    } else{
                        solutionStack.push({"cell": currentCell, "direction": direction})
                        currentCell.path = true;
                        gridArr.push(newGrid(grid))
                    }
                    break;
                }
            }
        }
    }
    return gridArr;
}