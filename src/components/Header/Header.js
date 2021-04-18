import React from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import {recursive} from '../../actions/recursive'



const Header = () => {
    const dispatch = useDispatch();
  

        return(
            
            <div className="container">
                <div className="top-header">
                    <button 
                    onClick={() => dispatch(recursive())}
                    >
                        Recursive Descent
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                </div>
            </div>
        )
}

export default Header;