import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

//Routes
import HomeContainer from './Container/HomeContainer';
import ShowContainer from './Container/ShowContainer';



const My404 = () => {
  return (
    <div>
      ...error...
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route exact path="/:id" component={ ShowContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default App;
