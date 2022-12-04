import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer.js';
import Experience from './Experience';
import logo from '../assets/logo.png';
import "../App.css";


function Home() {
  return (
    <div className="App">
      <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">AL</Link>
      <div className="nav-bar-container">
      <Link to="/my-portfolio/work" className="nav-bar-link">Work</Link>
      <Link to="/my-portfolio/about" className="nav-bar-link">About</Link>
      <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      {/* <div className="landing-text-wrapper"> */}
        {/* <div className="landing-text-padding"/> */}
        <div className="introduction">
        <div>
          <img className="center" src={logo} width="400" height="300"></img>
        </div>
        <div className="header-title-wrap">
          <h1 className="header">Hello, I'm Amber! 👋</h1>
          <p className="description">I'm an interdisciplinary UX Designer studying Data Science and Cognitive Science @ UC Berkeley and striving to enhance digital experiences.</p>
        </div>
        </div>
      <Experience/>
      <Footer/>
      <div className="subtract"/>
    </div>
  );
}

export default Home;
