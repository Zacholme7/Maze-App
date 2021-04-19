import {recursiveBack} from '../Algorithms/RecursiveBack'
import {randomizedPrims} from '../Algorithms/RandomizedPrim'
import { binaryTree } from '../Algorithms/BinaryTree';
import { huntAndKill } from '../Algorithms/huntAndKill';

const algoReducer = (state = recursiveBack, action) => {
    switch(action.type){
        case 'RecursiveBack':
            return recursiveBack;
        case 'Prim':
            return randomizedPrims;
        case 'BinaryTree':
            return binaryTree;
        case 'HuntAndKill':
            return huntAndKill;
        default: 
            return state;
    }
}

export default algoReducer;