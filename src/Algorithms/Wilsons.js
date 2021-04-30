import { ROW, COL } from '../components/Grid/Grid.js';




function wilsons(grid){
    let mazeObj = {}
    for(let row = 0; row < ROW; row++){
        for(let col = 0; col < COL; col++){
           mazeObj[grid[row][col]] = false
        }
    }


    let currentCell = grid[Math.floor(ROW/2)][Math.floor(COL/2)] // sets starting to middle of maze


    let randomWalkArr = []
    let counter = ROW * COL - 1 

    // will get a random cell within the grid

    // while there are still cells left in the maze
    while(count > 0){

        
        // get a starting cell for the random walk
        let randRow = Math.floor(Math.random() * ROW)
        let randCol = Math.floor(Math.random() * COL)
        let randCell = grid[randRow][randCol]
        counter -= 1 // can decrement a counter since this will 100% be a start for the path

    // while the randomly picked cell is not a cell already in the maze 
        while(true){
            let randRow = Math.floor(Math.random() * ROW)
            let randCol = Math.floor(Math.random() * COL)
            let randCell = grid[randRow][randCol]


            if(mazeObj[randCell] == true){
                // check if the random cell is already in the maze
                break;
            } else{

            }
        }
    }


    // have an object with all cells mapped to a boolean, gives O(1) loopup

    // randomly add starting cell to the maze, set starting to random cell
    // pick unvisited cell in maze at random
    //      pick random neighbor for the unvisited cell and record direction it was from last cell
    //      check if random neighbor is already in "maze"
    //      


}