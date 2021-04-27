import React, {useState} from 'react';
import Node from '../Node/Node'
import {useSelector, useDispatch} from 'react-redux';
import './Grid.css'

export const ROW = 25;
export const COL = 55;



const Grid = () =>  {
    
    const [grid, setGrid] = useState(getInitialGrid());
    const [active, setActive] = useState(false);
    const algo = useSelector(state => state.counter)
    

    const generate = () => {
        const maze = algo(grid, grid[Math.floor(ROW/2)][Math.floor(COL/2)]);
        
        for(let i = 0; i < maze.length; i++){
            setTimeout(() => {
                setGrid(maze[i])
              }, 20*i );
        }

    };

    const resetGrid = () => {
        setGrid(getInitialGrid())
    };

    


        return(
            <React.Fragment>
                
           <div className="top">
           <div className={`generate ${active ? "active": ""}`} onClick={() => generate()} >
                       Generate
            </div>
            </div>

           
        
            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return(
                        <div key={rowIdx} className="row" style={{height: `calc(100% / ${ROW}`}}>
                            {row.map((node, nodeIdx) => {
                                
                                const {col, row, visited, path, current, top, bottom, right, left} = node;
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
        left: true
    }
}

export default Grid;
