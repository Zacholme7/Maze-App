import React, {useState} from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import {recursive} from '../../actions/recursive'
import { prim } from '../../actions/prim';
import { binary } from '../../actions/binary'
import { hunt } from '../../actions/hunt';
import { sidewinder } from '../../actions/sidewinder';
import { deadend } from '../../actions/deadend';
import { lefthand } from '../../actions/lefthand';



const Header = () => {
    const dispatch = useDispatch();
    const [mazeActive, setmazeActive] =  useState(0);
    const [pathActive, setpathActive] = useState(0);
  

        return(
            
            <div className="container">
                <div className="top-header">
                <button className={`btn-top ${mazeActive == 0 ? `current`: ``}`}
                    onClick={() => {dispatch(lefthand()); setmazeActive(0)}}
                    >
                        Eller's
                    </button>
                    <button className={`btn-top ${mazeActive == 1 ? `current`: ``}`}
                    onClick={() => {dispatch(recursive()); setmazeActive(1)}}
                    >
                        Recursive
                    </button>
                    <button className={`btn-top ${mazeActive == 2 ? `current`: ``}`}
                    onClick={() => {dispatch(prim()); setmazeActive(2)}}
                    >
                        Prims
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                    <button className={`btn-top ${mazeActive == 3 ? `current`: ``}`}
                    onClick={() => {dispatch(binary()); setmazeActive(3)}}
                    >
                        Binary
                    </button>
                    <button className={`btn-top ${mazeActive == 4 ? `current`: ``}`}
                    onClick={() => {dispatch(hunt()); setmazeActive(4)}}
                    >
                        Hunt
                    </button>
                    <button className={`btn-top ${mazeActive == 5 ? `current`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setmazeActive(5)}}
                    >
                        Sidewinder

                    </button>
                    
                    
                </div>
                <div className="bottom-header">

                <button className={`btn-top ${pathActive == 0 ? `current`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setpathActive(0)}}
                    >
                        Left
                    </button>

                    <div className="title">
                        PathFinder
                    </div>

                    <button className={`btn-top ${pathActive == 1 ? `current`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setpathActive(1)}}
                    >
                        Right
                    </button>
                </div>
            </div>
        )
}

export default Header;