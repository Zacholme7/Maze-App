import React, {useState} from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import {recursive} from '../../actions/recursive'
import { prim } from '../../actions/prim';
import { binary } from '../../actions/binary'
import { hunt } from '../../actions/hunt';
import { sidewinder } from '../../actions/sidewinder';



const Header = () => {
    const dispatch = useDispatch();
    const [active, setActive] =  useState(0);
  

        return(
            
            <div className="container">
                <div className="top-header">
                <button className={`btn-top ${active == 0 ? `current`: ``}`}
                    onClick={() => {dispatch(recursive()); setActive(0)}}
                    >
                        Recursive
                    </button>
                    <button className={`btn-top ${active == 0 ? `current`: ``}`}
                    onClick={() => {dispatch(recursive()); setActive(0)}}
                    >
                        Recursive
                    </button>
                    <button className={`btn-top ${active == 1 ? `current`: ``}`}
                    onClick={() => {dispatch(prim()); setActive(1)}}
                    >
                        Prims
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                    <button className={`btn-top ${active == 2 ? `current`: ``}`}
                    onClick={() => {dispatch(binary()); setActive(2)}}
                    >
                        Binary
                    </button>
                    <button className={`btn-top ${active == 3 ? `current`: ``}`}
                    onClick={() => {dispatch(hunt()); setActive(3)}}
                    >
                        Hunt
                    </button>
                    <button className={`btn-top ${active == 4 ? `current`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setActive(4)}}
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