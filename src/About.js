import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Amber from "./assets/Amber.png";
import Footer from './Footer.js';
import "./About.css";


function About() {

  return (
    <div className="About">
      <div className="nav-bar-wrapper">
        <Link to="/" className="nav-link-home">AL</Link>
        <div className="nav-bar-container">
          <Link to="/work" className="nav-bar-link">Work</Link>
          <Link to="/About/about" className="nav-bar-link">About</Link>
          <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      <div className="about-content-wrapper">
        <div className="about-image-wrapper"><img className="about-image" src={Amber}/></div>
        <div className="about-left-content">
          <div className="about-paragraph">hello!</div>
          <div className="about-header">I’m Amber.</div>
          <div className="about-paragraph">I'm a current second-year at the University of California, Berkeley pursuing a double major in Data Science (Domain Emphasis in Neuroscience) and Cognitive Sciecne, as well as the Berkeley certificate of Design Innovation.</div>
          <div className="about-paragraph">On campus, I've been teaching frontend web development and design at the <a href="https://wdd.io" className="highlight-text" target="_blank">Web Design DeCal</a>, leading a team as a project manager for <a href="https://codebase.berkeley.edu" className="highlight-text" target="_blank">Berkeley Codebase</a>, and working on pro-bono graphic design projects with <a href="https://innovativedesign.club/" className="highlight-text" target="_blank">Innovative Design</a>. I've also written a semester-long opinion column called <a href="https://www.dailycal.org/author/biancalee/" className="highlight-text" target="_blank">"Head in the Cloud"</a> on the implications of tech at The Daily Californian.</div>
          <div className="about-paragraph">Growing up, I've immersed myself throughout multiple creative outlets and coming into college, I became exposed to the world of user experience and design.</div>
          <div className="about-paragraph">~</div>
          <div className="about-paragraph">I'm interested in design systems, information-mapping tools, building digital communities, and the inextricable nature of our social, economic, and political geographies. </div>
          <div className="about-subheader">Some of my favorite things</div>
          <div className="about-paragraph">• <a href="https://airtable.com/shrbvZFU7357K39mD" target="_blank" className="highlight-text">Books</a></div>
          <div className="about-paragraph">• The Daily, hosted by Michael Barbaro  </div>
          <div className="about-paragraph">• Game of Thrones</div>
          <div className="about-paragraph">• Funky nail art</div>
          <div className="about-paragraph">• My Leuchtturm1917 journal, where I gather and organize my thoughts</div>
          <div className="about-subheader">Principles I live and learn by</div>
          <div className="about-paragraph">• <div className="bold-text"> Prioritize breadth of experience.</div> To innovate, it's so important to be able to synthesize new ideas across different domains. Specializing comes with time.   </div>
          <div className="about-paragraph">• <div className="bold-text"> Time is valuable.</div> "Busy" isn't necessarily better. Make time for yourse, and always make time for people who matter.</div>
          <div className="about-paragraph">• <div className="bold-text"> Remember the "why".</div> When the big picture is kept in mind, it's more difficult to get bogged down by the miniscule.</div>
          <div className="about-paragraph">• <div className="bold-text"> Do the right thing.</div></div>
        </div>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default About;
