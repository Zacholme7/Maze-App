import React from 'react';
import './Node.css'
import {ROW, COL} from '../Grid/Grid'

class Node extends React.Component{
    render(){
        const {starting, ending, col, row, visited,path, current, top, bottom, left, right, doublePath} = this.props;
        const start = starting ? "starting" : "";
        const end = ending ? "ending" : "";
        const bottomWall = bottom ? "bottom": "bottomFalse";
        const rightWall = right ? "right": " rightFalse";
        const currentNode = current ? "current": " ";
        const inPath = path ? "path": " ";
        const doubleVisited = doublePath ? "doublePath": "";

        let wallClass = undefined
        if(!bottom && !right){
            wallClass = "noWallRel"
        } 

        return(
            <div
            id={`node-${row}-${col}`}
            className={`cell ${start} ${end} ${currentNode} ${inPath} 
            ${rightWall} ${bottomWall} ${doubleVisited} ${wallClass} ${wallClass}:after`}
            style={{ width: `calc(100% / ${COL})`}}
            ></div>
        );
    }
}

export default Node;