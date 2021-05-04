import { deadend } from '../Pathfinders/Deadend';
import { leftHand } from '../Pathfinders/LeftHand';

const solverReducer = (state = leftHand, action) => {
    switch(action.type){
        case 'LeftHand':
            return leftHand;
        case "DeadEnd":
            return deadend
        default: 
            return state;
    }
}

export default solverReducer;