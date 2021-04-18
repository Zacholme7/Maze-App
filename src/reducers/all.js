import algoReducer from './algo'
import {combineReducers} from 'redux'


const allReducers = combineReducers({
    counter: algoReducer
})


export default allReducers;