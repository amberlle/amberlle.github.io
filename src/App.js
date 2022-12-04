import About from './js-files/About.js';
import Home from './js-files/Home.js';
import Work from './js-files/Work.js';
import Working from './js-files/Working.js';;
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/my-portfolio/about">
            <About/>
          </Route>
          <Route exact path="/my-portfolio">
            <Home/>
          </Route>
          <Route exact path="/my-portfolio/work">
            <Work/>
          </Route>
          <Route exact path="/my-portfolio/working">
            <Working/>
          </Route>
    </Switch>
    </Router>
  );
}

export default App;
