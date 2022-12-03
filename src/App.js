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
  // const backgroundFontSize = useScrollChange();
  return (
    <Router>
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/fb">
            <FbInternship/>
          </Route>
          <Route exact path="/airbnb">
            <Airbnb/>
          </Route>
          <Route exact path="/nickelodeon">
            <Nickelodeon/>
          </Route>
          <Route exact path="/work">
            <Work/>
          </Route>
          <Route exact path="/working">
            <Working/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
