import {recursiveBack} from '../Algorithms/RecursiveBack'

const algoReducer = (state = recursiveBack, action) => {
    switch(action.type){
        case 'RecursiveBack':
            return recursiveBack;
        case 'Prim':
            return state - 1;
        default: 
            return state;
    }
}

export default algoReducer;