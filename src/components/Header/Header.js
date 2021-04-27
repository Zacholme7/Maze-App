import React, {useState} from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import {recursive} from '../../actions/recursive'
import { prim } from '../../actions/prim';
import { binary } from '../../actions/binary'
import { hunt } from '../../actions/hunt';
import { sidewinder } from '../../actions/sidewinder';
import { deadend } from '../../actions/deadend';



const Header = () => {
    const dispatch = useDispatch();
    const [active, setActive] =  useState(0);
  

        return(
            
            <div className="container">
                <div className="top-header">
                <button className={`btn-top ${active == 0 ? `current`: ``}`}
                    onClick={() => {dispatch(deadend()); setActive(0)}}
                    >
                        Eller's
                    </button>
                    <button className={`btn-top ${active == 1 ? `current`: ``}`}
                    onClick={() => {dispatch(recursive()); setActive(1)}}
                    >
                        Recursive
                    </button>
                    <button className={`btn-top ${active == 2 ? `current`: ``}`}
                    onClick={() => {dispatch(prim()); setActive(2)}}
                    >
                        Prims
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                    <button className={`btn-top ${active == 3 ? `current`: ``}`}
                    onClick={() => {dispatch(binary()); setActive(3)}}
                    >
                        Binary
                    </button>
                    <button className={`btn-top ${active == 4 ? `current`: ``}`}
                    onClick={() => {dispatch(hunt()); setActive(4)}}
                    >
                        Hunt
                    </button>
                    <button className={`btn-top ${active == 5 ? `current`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setActive(5)}}
                    >
                        Sidewinder
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