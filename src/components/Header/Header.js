import React from 'react';
import './Header.css'


const Header = () => {

  

        return(
            
            <div className="container">
                <div className="top-header">
                    <div className="title">
                        Maze Generator
                    </div>
                </div>
                <div className="bottom-header">
                        <button className="btn">Generate</button>
                </div>
            </div>
        )
}

export default Header;