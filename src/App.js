import React from 'react';

import './App.css';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';

// Components
import Container from './components/Container';
import Nav from './components/Nav';
import NotHere from './components/NotHere';

const App = () => (
  
  <HashRouter>
    <div className="container">
      <Route component={Nav} />
      <Switch>
        <Route exact path='/' render={ () => <Redirect to={"/search"} /> } />
        <Route exact path="/search" component={Container} />
        <Route path="/search/:query" component={Container} />
        <Route path="/cats" render={ () => {return <Container query={'kittens'} /> }} />
        <Route path="/dogs" render={ () => {return <Container query={'puppys'} /> }} />
        <Route path="/birds" render={ () => {return <Container query={'birds'} /> }} /> 
        <Route component={NotHere} />
      </Switch> 
    </div>
  </HashRouter>
)

export default App;