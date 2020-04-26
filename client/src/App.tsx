import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/App.scss';
import './components/Home';
import Home from './components/Home';

import Join from './components/Join/Join';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Join} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
