import React, {useState} from 'react';
import Node from '../Node/Node'
import {useSelector, useDispatch} from 'react-redux';
import './Grid.css'

export const ROW = 25;
export const COL = 60;



const Grid = () =>  {
    
    const [grid, setGrid] = useState(getInitialGrid());
    const [reset, setReset] = useState(0);
    const algo = useSelector(state => state.counter)
    

    const generate = () => {
        const maze = algo(grid, grid[Math.floor(ROW/2)][Math.floor(COL/2)]);
        
        console.log(maze.length)
        for(let i = 0; i < maze.length; i++){
            setTimeout(() => {
                setGrid(maze[i])
              }, 10*i );
        }

    };

    const resetGrid = () => {
        setGrid(getInitialGrid())
    };

    


        return(
            <React.Fragment>
                
           <div className="top">
           <div className={`generate`} onClick={() => generate()} >
                       Generate
            </div>
            </div>

           
        
            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return(
                        <div key={rowIdx} className="row" style={{height: `calc(100% / ${ROW}`, width: "100%", display: 'flex'}}>
                            {row.map((node, nodeIdx) => {
                                
                                const {col, row, visited, path, current, top, bottom, right, left, deadEnd,
                                    discard,visitedCurr, visitedPath} = node;
                                return(
                                    <Node 
                                        key = {nodeIdx}
                                        col = {col}
                                        row = {row}
                                        visited = {visited}
                                        path = {path}
                                        current = {current}
                                        top = {top}
                                        bottom = {bottom}
                                        right = {right}
                                        left = {left}
                                        deadEnd = {deadEnd}
                                        discard = {discard}
                                        visitedCurr = {visitedCurr}
                                        visitedPath = {visitedPath}
                                    ></Node>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            </React.Fragment>
        );
}


const getInitialGrid = () =>{
    const grid = [];
    for(let row = 0; row < ROW; row++){
        const currRow = [];
        for(let col = 0; col < COL; col++){
            currRow.push(createNode(col, row));
        }
        grid.push(currRow);
    }
    return grid;
}

const createNode = (col, row) => {
    return {
        col: col, 
        row: row,
        visited: false,
        path: false,
        current: false,
        top: true,
        bottom: true,
        right: true,
        left: true,
        deadEnd: false,
        discard: false,
        visitedCurr: false,
        visitedPath: false
    }
}

export default Grid;
