import React, {useState} from 'react';
import Node from '../Node/Node'
import {recursiveBack} from '../../Algorithms/RecursiveBack'
import {useSelector, useDispatch} from 'react-redux';

import './Grid.css'

export const ROW = 25;
export const COL = 60;


const Grid = () =>  {
    
    const [grid, setGrid] = useState(getInitialGrid());
    const algo = useSelector(state => state.counter)
    

    const generate = () => {
        const maze = algo(grid, grid[0][0]);
        
        for(let i = 0; i < maze.length; i++){
            setTimeout(() => {
                setGrid(maze[i])
              }, 20*i );
        }
        
    };

    


        return(
            <>
           <div className="top">
           <div className="btn" onClick={() => generate()} >
                       Generate
                </div>
           </div>
        
            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return(
                        <div key={rowIdx} className="row">
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
            </>
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
