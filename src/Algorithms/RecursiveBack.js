import { ROW, COL} from '../components/Grid/Grid';
import {getNeighbors, removeWall, newGrid} from './utility'

/* Preforms the recursive backtracking maze generation algorithm */
export function recursiveBack(grid){
    let stack = [];
    let gridArr = [];
    let curr = grid[Math.floor(ROW/2)][Math.floor(COL/2)];
    curr.visited = true;
    curr.path = true;
    stack.push(curr);
    curr.current = true;
    gridArr.push(newGrid(grid));
    while(stack.length > 0){
        const next = getNeighbors(grid, curr);
        if(next){
            next.visited = true;
            stack.push(next);
            next.path = true;
            removeWall(curr, next);
            curr.current = false
            curr = next;
            curr.current = true
            
        } else {
            curr.current = false
            curr = stack.pop();
            curr.path = false;
            curr.current = true;
            if(stack.length === 0){
                curr.current = false;
            }
        }
        gridArr.push(newGrid(grid));
    }
    gridArr.push(newGrid(grid))
    return gridArr;
}


