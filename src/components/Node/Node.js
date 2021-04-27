import React from 'react';
import './Node.css'
import {ROW, COL} from '../Grid/Grid'

class Node extends React.Component{
    render(){
        const {col, row, visited,path, current, top, bottom, left, right, deadEnd,
        visitedCurr, visitedPath } = this.props;
        const bottomWall = bottom ? "bottom": "bottomFalse";
        const rightWall = right ? "right": " rightFalse";
        const currentNode = current ? "current": " ";
        const inPath = path ? "path": " ";

        const topwall = top ? "topwall": " topwallFalse";
        const leftwall = left ? "leftwall": " leftwallFalse";

        const visitedNode = visited ? "visited": " ";
        const isDeadEnd = deadEnd ? "deadend": " ";
        const isCurrVisited = visitedCurr ? "visitedCurr": " ";
        const isVisitedPath = visitedPath ? "visitedPath": " ";
        return(
            <div
            
            id={`node-${row}-${col}`}
            className={`cell ${currentNode} ${inPath} ${rightWall} ${bottomWall}`}
            style={{ width: `calc(100% / ${COL})`}}
            /*
            className={`cell ${topwall} ${bottomwall}   ${rightwall} ${leftwall} ${pathVar} ${visitedNode} ${currentNode} ${isDeadEnd}
            ${isCurrVisited} ${isVisitedPath} `}
            
            */
            >
        

            </div>
        );
    }
}

export default Node;