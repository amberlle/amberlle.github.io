import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Amber from "../assets/Amber.png";
import Footer from './Footer.js';
import "../css-files/About.css";


function About() {

  return (
    <div className="About">
      <div className="nav-bar-wrapper">
        <Link to="/my-portfolio" className="nav-link-home">AL</Link>
        <div className="nav-bar-container">
        <Link to="/my-portfolio/work" className="nav-bar-link">Work</Link>
        <Link to="/my-portfolio/about" className="nav-bar-link">About</Link>
        <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      <div className="about-content-wrapper">
        <div className="about-image-wrapper"><img className="about-image" src={Amber}/></div>
        <div className="about-left-content">
          <div className="about-header">nice to meet you!</div>
          <div className="about-paragraph">I'm Amber, an undergraduate student at the University of California, Berkeley pursuing a double major in Data Science (Domain Emphasis in Neuroscience) and Cognitive Science, as well as the Berkeley Certificate of Design Innovation.</div>
          <div className="about-paragraph"> - </div>
          <div className="about-paragraph">Growing up immersed in numerous creative outlets, I'm passionate about producing innovative ideas to foster technological accesibility. My technical background as a data scientist and developer strengthens the interdisciplanary mindset needed to address user motivations.</div>
          <div className="about-paragraph"> - </div>
          <div className="about-paragraph">When I'm not designing or coding, I can be found fueling my boba and matcha addiction, discovering new music on Spotify, attempting to be a good plant mom, and performing dance covers with friends on campus!</div>
        </div>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default About;
