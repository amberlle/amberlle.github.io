import React from 'react';
import WorkCard from './components/WorkCard.js';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Work.css';
import Footer from './Footer.js';
import airbnb from './assets/airbnb.png';
import sidetrek from './assets/sidtrek.png';
import nick from './assets/nick.png';
import studentportal from './assets/student-portal.png';
import vector from './assets/vector.png';


function Work() {
  return (
      <>
    <div>
      <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">AL</Link>
      <div className="nav-bar-container">
        <Link to="/work" className="nav-bar-link">Work</Link>
        <Link to="/about" className="nav-bar-link">About</Link>
        <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      <div className="work-header-wrapper">
          <div className="work-header">
            what have i been up to?
          </div>
      </div>
      <div className="work-card-container">
          <WorkCard image={sidetrek} link="/airbnb" title="Reimagining the Minds+ Experience" description="UX Research // Product Design // Web Design"/>
          <WorkCard image={nick} link="/nickelodeon" title="Moving with Virtual Reality" description="Product Design // UX Research // UX Design"/>
          <WorkCard image={nick} link="/nickelodeon" title="The Samsung Experience for Gen-Z" description="UX Research // Business Strategy // Slide Decking"/>
          <WorkCard image={nick} link="/nickelodeon" title="Sidetrek Homepage Redesign" description="Web Design // Web Development // Marketing"/>
          <WorkCard image={nick} link="/nickelodeon" title="The Future of Furniture" description="Product Design // UX Research // User Testing"/>
          <WorkCard image={nick} link="/nickelodeon" title="Improving Sotira's Features" description="UX Research // Beta Testing // Marketing"/>
          <WorkCard image={nick} link="/nickelodeon" title="Berkeley SkyDeck Pitch Decks" description="Slide Decking // Business Strategy // Client Work"/>
          <WorkCard image={nick} link="/nickelodeon" title="Brand Design for Appa Health" description="Brand Design // Social Media Marketing // User Testing"/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Work;
