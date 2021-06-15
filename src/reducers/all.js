import algoReducer from './algo'


import {combineReducers} from 'redux'
import solverReducer from './solver';


const allReducers = combineReducers({
    algo: algoReducer,
    solver: solverReducer
})


export default allReducers;
