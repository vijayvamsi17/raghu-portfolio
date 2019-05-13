import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';
import Photography from './components/Photography';

function App() {
  return (
    <BrowserRouter>
      <div className="homeBackground">
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/experience" component={Experience} />
            <Route path="/photography" component={Photography} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
