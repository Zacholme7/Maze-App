import { breadthSearch } from '../Pathfinders/Breadth';
import { deadend } from '../Pathfinders/Deadend';
import { depthSearch } from '../Pathfinders/Depth';
import { leftHand } from '../Pathfinders/LeftHand';
import { recursiveSolver } from '../Pathfinders/recursiveSolver';
import { rightHand } from '../Pathfinders/RightHand';

const solverReducer = (state = leftHand, action) => {
    switch(action.type){
        case 'LeftHand':
            return leftHand;
        case 'RightHand':
            return rightHand;
        case "DeadEnd":
            return deadend
        case "BreadthSolver":
            return breadthSearch
        case "DepthSolver":
            return depthSearch
        case "RecursiveSolver":
            return recursiveSolver
        default: 
            return state;
    }
}

export default solverReducer;
