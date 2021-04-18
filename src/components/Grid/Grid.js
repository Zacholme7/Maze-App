import React from 'react';
import Node from '../Node/Node'

import {recursiveBack} from '../../Algorithms/RecursiveBack'
import './Grid.css'

export const ROW = 25;
export const COL = 60;


class Grid extends React.Component {
    state = {grid: []};

    
    componentDidMount(){
        const grid = getInitialGrid();
        this.setState({grid: grid});
        
    };

    visualizeAnimation(){
        const {grid} = this.state
        const maze = recursiveBack(grid, grid[0][0]);
        
        for(let i = 0; i < maze.length; i++){
            setTimeout(() => {
                this.setState({grid: maze[i]});
              }, 20*i );
        }
        
    };

    resetGrid(){
        const grid = getInitialGrid();
        this.setState({grid: grid});
    }


    render(){
        return(
            <>
            <button onClick={() => this.visualizeAnimation()}>
          Visualize Dijkstra's Algorithm
        </button>
            <div className="grid">
                {this.state.grid.map((row, rowIdx) => {
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
