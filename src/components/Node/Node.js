import React from 'react';
import './Node.css'

class Node extends React.Component{
    render(){
        const {col, row, visited,path, current, top, bottom, left, right } = this.props;
        const topwall = top ? "topwall": " ";
        const bottomwall = bottom ? "bottomwall": " ";
        const rightwall = right ? "rightwall": " ";
        const leftwall = left ? "leftwall": " ";
        const pathVar = path ? "path": " ";
        const visitedNode = visited ? "visited": " ";
        const currentNode = current ? "current": " ";
        return(
            <div
            id={`node-${row}-${col}`}
            className={`node ${topwall} ${bottomwall}  ${rightwall} ${leftwall} ${pathVar} ${visitedNode} ${currentNode}`}
            ></div>
        );
    }
}

export default Node;