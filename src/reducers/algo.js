import {recursiveBack} from '../Algorithms/RecursiveBack';
import {randomizedPrims} from '../Algorithms/RandomizedPrim';
import { binaryTree } from '../Algorithms/BinaryTree';
import { huntAndKill } from '../Algorithms/huntAndKill';
import { sideWinder } from '../Algorithms/Sidewinder';
import { wilsons } from '../Algorithms/Wilsons';


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
        case 'Sidewinder':
            return sideWinder;
        case "Wilsons":
            return wilsons
        default: 
            return state;
    }
}

export default algoReducer;