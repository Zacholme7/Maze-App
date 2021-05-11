import React, {useState} from 'react';
import './Header.css'
import {useDispatch} from 'react-redux'
import { lefthand, righthand, deadend, depth, breadth, recursivesolver } from '../../actions/solvers';
import { wilsons, sidewinder, hunt, binary, prim, recursive, kruskals, aldous, tree, ellers} from '../../actions/generators';



const Header = () => {
    const dispatch = useDispatch();
    const [mazeActive, setmazeActive] =  useState(0);
    const [pathActive, setpathActive] = useState(0);
  

        return(
            
            <div className="container">
                <div className="top-header">
                <button className={`btn-top ${mazeActive === 0 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(recursive()); setmazeActive(0)}}
                    >
                        Recursive

                    </button>
                    <button className={`btn-top ${mazeActive === 1 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(sidewinder()); setmazeActive(1)}}
                    >
                        Sidewinder
                    </button>
                    <button className={`btn-top ${mazeActive === 2 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(prim()); setmazeActive(2)}}
                    >
                        Prims
                    </button>

                    <button className={`btn-top ${mazeActive === 3 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(tree()); setmazeActive(3)}}
                    >
                        Growing Tree
                    </button>

                    <button className={`btn-top ${mazeActive === 4 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(kruskals()); setmazeActive(4)}}
                    >
                        Kruskals

                    </button>

                   
                    <div className="title">
                        Maze Generator
                    </div>


                    <button className={`btn-top ${mazeActive === 5 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(binary()); setmazeActive(5)}}
                    >
                        Binary
                    </button>
                    <button className={`btn-top ${mazeActive === 6 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(ellers()); setmazeActive(6)}}
                    >
                        Ellers
                    </button>

                    <button className={`btn-top ${mazeActive === 7 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(hunt()); setmazeActive(7)}}
                    >
                        Hunt And Kill
                    </button>
                    <button className={`btn-top ${mazeActive === 8 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(wilsons()); setmazeActive(8)}}
                    >
                        Wilsons

                    </button>


                    <button className={`btn-top ${mazeActive === 9 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(aldous()); setmazeActive(9)}}
                    >
                        Aldous-Broder
                    </button>

                    
                    
                    
                </div>
                <div className="bottom-header">

                <button className={`btn-top ${pathActive === 0 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(lefthand()); setpathActive(0)}}
                    >
                        Left Hand Search
                    </button>

                <button className={`btn-top ${pathActive === 1 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(breadth()); setpathActive(1)}}
                    >
                        Breath First Search
                    </button>

                    <button className={`btn-top ${pathActive === 2 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(righthand()); setpathActive(2)}}
                    >
                        Right Hand Search
                    </button>

                    <div className="title">
                        PathFinder
                    </div>

                    <button className={`btn-top ${pathActive === 3 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(deadend()); setpathActive(3)}}
                    >
                        Deadend Filler
                    </button>

                    <button className={`btn-top ${pathActive === 4 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(recursivesolver()); setpathActive(4)}}
                    >
                        Recursive Solver
                    </button>

                    <button className={`btn-top ${pathActive === 5 ? `currentBtn`: ``}`}
                    onClick={() => {dispatch(depth()); setpathActive(5)}}
                    >
                        Depth First Search
                    </button>
                </div>
            </div>
        )
}

export default Header;