import React, {useState} from 'react';
import Grid from './Grid/Grid'
import './App.css'
import Header from './Header/Header';
import {recursiveBack} from '../Algorithms/RecursiveBack'



const App = () => {
    return(
        <div className="App">
            <Header></Header>
            <Grid></Grid>   
        </div>
    );
}

export default App;