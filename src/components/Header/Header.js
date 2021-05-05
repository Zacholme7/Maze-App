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
import { wilsons } from '../../actions/wilsons';
import { righthand } from '../../actions/righthand';
import { recursivesolver } from '../../actions/recursivesolver';



const Header = () => {
    const dispatch = useDispatch();
    const [mazeActive, setmazeActive] =  useState(0);
    const [pathActive, setpathActive] = useState(0);
  

        return(
            
            <div className="container">
                <div className="top-header">
                <button className={`btn-top ${mazeActive == 0 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(wilsons()); setmazeActive(0)}}
                    >
                        Wilsons

                    </button>
                    <button className={`btn-top ${mazeActive == 1 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(recursive()); setmazeActive(1)}}
                    >
                        Recursive
                    </button>
                    <button className={`btn-top ${mazeActive == 2 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(prim()); setmazeActive(2)}}
                    >
                        Prims
                    </button>
                    <div className="title">
                        Maze Generator
                    </div>
                    <button className={`btn-top ${mazeActive == 3 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(binary()); setmazeActive(3)}}
                    >
                        Binary
                    </button>
                    <button className={`btn-top ${mazeActive == 4 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(hunt()); setmazeActive(4)}}
                    >
                        Hunt
                    </button>
                    <button className={`btn-top ${mazeActive == 5 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setmazeActive(5)}}
                    >
                        Sidewinder

                    </button>

                    
                    
                    
                </div>
                <div className="bottom-header">

                <button className={`btn-top ${pathActive == 0 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(lefthand()); setpathActive(0)}}
                    >
                        Left
                    </button>

                    <button className={`btn-top ${pathActive == 1 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(righthand()); setpathActive(1)}}
                    >
                        Right
                    </button>

                    <div className="title">
                        PathFinder
                    </div>

                    <button className={`btn-top ${pathActive == 2 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(deadend()); setpathActive(2)}}
                    >
                        DeadEnd
                    </button>

                    <button className={`btn-top ${pathActive == 2 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(recursivesolver()); setpathActive(2)}}
                    >
                        Recursive
                    </button>
                </div>
            </div>
        )
}

export default Header;