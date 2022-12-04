import React from 'react';
import WorkCard from '../WorkCard/WorkCard.js';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../css-files/Work.css';
import Footer from './Footer.js';
import sidetrek from '../assets/sidetrek.png';
import moving from '../assets/moving.png';
import sotira from '../assets/sotira.png';
import skydeck from '../assets/skydeck.png';
import appa from '../assets/appa.png';
import mod from '../assets/mod.png';
import samsung from '../assets/samsung.png';
import minds from '../assets/minds.png';


function Work() {
  return (
      <>
    <div>
      <div className="nav-bar-wrapper">
      <Link to="/my-portfolio" className="nav-link-home">AL</Link>
      <div className="nav-bar-container">
        <Link to="/my-portfolio/work" className="nav-bar-link">Work</Link>
        <Link to="/my-portfolio/about" className="nav-bar-link">About</Link>
        <Link to={{ pathname: "https://drive.google.com/file/d/1hFibJCCy0yENpEFW6eYxCKSRGOxRkF2n/view?usp=sharing" }} target="_blank" className="nav-bar-link">Resume</Link>
        </div>
      </div>
      <div className="work-header-wrapper">
          <div className="work-header">
            what have i been up to?
          </div>
      </div>
      <div className="work-card-container">
          <WorkCard image={minds} link="/my-portfolio/working" title="Reimagining the Minds+ Experience" description="UX Research // Product Design // Web Design"/>
          <WorkCard image={moving} link="/my-portfolio//working" title="Moving with Virtual Reality" description="Product Design // UX Research // UX Design"/>
          <WorkCard image={samsung} link="/my-portfolio//working" title="The Samsung Experience for Gen-Z" description="UX Research // Business Strategy // Slide Decking"/>
          <WorkCard image={sidetrek} link="/my-portfolio//working" title="Sidetrek Homepage Redesign" description="Web Design // Web Development // Marketing"/>
          <WorkCard image={mod} link="/my-portfolio//working" title="The Future of Furniture" description="Product Design // UX Research // User Testing"/>
          <WorkCard image={sotira} link="/my-portfolio//working" title="Enhancing Sotira's User Experience" description="UX Research // Beta Testing // Marketing"/>
          <WorkCard image={skydeck} link="/my-portfolio//working" title="Berkeley SkyDeck Pitch Decks" description="Slide Decking // Business Strategy // Client Work"/>
          <WorkCard image={appa} link="/my-portfolio//working" title="Brand Design for Appa Health" description="Brand Design // Social Media Marketing // User Testing"/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Work;
