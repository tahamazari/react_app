import React, {Component} from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import store from '../store/store.js';

import Header from './Header/Header.js'
import All_Forces from './All_Forces/All_Forces'

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <All_Forces />
                </div>
            </Provider>
        )
    }
}

export default App;