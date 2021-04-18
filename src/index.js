import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import algoReducer from './reducers/algo';
import {Provider} from 'react-redux';
import allReducers from './reducers/all';

const store = createStore(allReducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)