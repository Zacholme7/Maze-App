import { deadend } from '../Pathfinders/Deadend';
import { leftHand } from '../Pathfinders/LeftHand';
import { recursive } from '../Pathfinders/Recursive';
import { rightHand } from '../Pathfinders/RightHand';

const solverReducer = (state = leftHand, action) => {
    switch(action.type){
        case 'LeftHand':
            return leftHand;
        case 'RightHand':
            return rightHand;
        case "DeadEnd":
            return deadend
        case "RecursiveSolver":
            return recursive
        default: 
            return state;
    }
}

export default solverReducer;