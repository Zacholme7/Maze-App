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
        const maze = algo(grid);
        
        for(let i = 0; i < maze.length; i++){
            setTimeout(() => {
                setGrid(maze[i])
              }, 15*i );
        }

    };

    const resetGrid = () => {
        setGrid(getInitialGrid())
    };

    


        return(
            <React.Fragment>
                
           <div className="top">
               <div className="control-container">
               <button className={`control-btn`} onClick={() => generate()} >
                       Generate
            </button>
            <button className={`control-btn`} onClick={() => resetGrid()} >
                       Reset
            </button>
            <button className={`control-btn`} onClick={() => generate()} >
                       Solve
            </button>
               </div>
            </div>

           
        
            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return(
                        <div key={rowIdx} className="row" style={{height: `calc(100% / ${ROW}`, width: "100%", display: 'flex'}}>
                            {row.map((node, nodeIdx) => {
                                
                                const {starting, ending, col, row, visited, path, current, top, bottom, right, left, doublePath} = node;
                                return(
                                    <Node 
                                        key = {nodeIdx}
                                        starting = {starting}
                                        ending = {ending}
                                        col = {col}
                                        row = {row}
                                        visited = {visited}
                                        path = {path}
                                        current = {current}
                                        top = {top}
                                        bottom = {bottom}
                                        right = {right}
                                        left = {left}
                                        doublePath = {doublePath}
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
        starting: false, // the starting node
        ending: false, // the ending node
        col: col, // column of the cell
        row: row, // row of the cell
        visited: false, // has the cell been visited already
        path: false, // is the cell part of the current path
        current: false, // is the cell the current one
        top: true, // top wall
        bottom: true, // bottom wall
        right: true, // right wall
        left: true, // left wall
        doublePath: false // double path when you backtrack in pathfinding
    }
}

export default Grid;
