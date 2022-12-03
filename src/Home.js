import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Rellax from 'rellax';
import Footer from './Footer.js';
import Experience from './components/Experience/Experience';
import pinkcircle from './assets/pink-circle.png';
import yellowcircle from './assets/yellow-circle.png';
import logo from './assets/logo.png';
import './App.css';


function Home() {
  // const backgroundFontSize = useScrollChange();


  useEffect(() => {
    new Rellax(".background-text-slow", { 
      speed: 10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".landing-text-slow", { 
      speed: 0,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".story-text-slow", { 
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".story-text-slowish", { 
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".circle-slow", { 
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".red-circle-slow", { 
      speed: 8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    
    //     window.addEventListener('scroll', () => {
    //   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // }, false);
  }, []);


  // setHidden(document.documentElement.scrollTop > 1100);

  return (
    <div className="App">
      <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">AL</Link>
      <div className="nav-bar-container">
        <Link to="/work" className="nav-bar-link">Work</Link>
        <Link to="/about" className="nav-bar-link">About</Link>
        <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      {/* <div className="landing-text-wrapper"> */}
        {/* <div className="landing-text-padding"/> */}
        <div>
          <img className="center" src={logo} width="400" height="300"></img>
        </div>
        <div className="header-title-wrap">
          <h1 className="header">Hello, I'm Amber! 👋</h1>
          <p className="description">I'm a UX Designer driven by human accesibility studying Data Science and Cognitive Science at UC Berkeley.</p>
        </div>
      <Experience/>
      <Footer/>
      <div className="subtract"/>
    </div>
  );
}

export default Home;
