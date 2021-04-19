import React from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import {recursive} from '../../actions/recursive'
import { prim } from '../../actions/prim';
import { binary } from '../../actions/binary'
import { hunt } from '../../actions/hunt';



const Header = () => {
    const dispatch = useDispatch();
  

        return(
            
            <div className="container">
                <div className="top-header">
                    <button 
                    onClick={() => dispatch(recursive())}
                    >
                        Recursive
                    </button>
                    <button 
                    onClick={() => dispatch(prim())}
                    >
                        prims
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                    <button 
                    onClick={() => dispatch(binary())}
                    >
                        binary
                    </button>
                    <button 
                    onClick={() => dispatch(hunt())}
                    >
                        hunt
                    </button>
                    
                    
                </div>
                <div className="bottom-header">
                    <div className="title">
                        PathFinder
                    </div>
                </div>
            </div>
        )
}

export default Header;