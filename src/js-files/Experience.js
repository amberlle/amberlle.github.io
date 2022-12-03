import React from 'react';
import sotira from'../assets/sotira-main.png';
import minds from'../assets/minds-main.png';
import sidetrek from'../assets/sidetrek-main.png';
import './Experience.css';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";


function Experience(props) {
  return (
      <div className="experience-wrapper">
      <div class="row">
        <div class="column">
          <div className="position text">
            <Link to="/working" style={{ textDecoration: 'none', color: 'white' }}>
            <h1 className="company">Sotira</h1>
            </Link>
          <h2 className="role">User Research and Social Media Intern</h2>
          <p className="project-description">Improving the user experience of financial tracking platform Sotira through beta testing and social media outreach.</p>
          <p className="skills">UX Research // Beta Testing // Marketing</p>
          </div>
          </div>
        <div class="column">
          <div class="image">
          <Link to="/working">
          <img src={sotira}  width="550px"/>
          </Link>
          </div>
        </div>
        </div>

        <div class="row">
        <div class="column">
          <div class="image-2">
          <Link to="/working">
          <img src={minds} width="550px"/>
          </Link>
          </div>
        </div>
        <div class="column">
          <div className="position text-2">
          <Link to="/working" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 className="company">Minds</h1>
          </Link>
          <h2 className="role">Product Design Consultant</h2>
          <p className="project-description">Enhancing the Minds+ subscription experience by understanding creator motivations and incentizing novel content.</p>
          <p className="skills">UX Research // Product Design // Web Design</p>
          </div>
          </div>
        </div>

        <div class="row">
        <div class="column">
          <div className="position text">
          <h1 className="company">Sidetrek</h1>
          <h2 className="role">UI/UX Intern</h2>
          <p className="project-description">Redesigning and implementing a modernized homepage for AI/ML company Sidetrek to highlight garner new users.</p>
          <p className="skills">Web Design // Web Development // Marketing</p>
          </div>
          </div>
        <div class="column">
          <div class="image">
          <Link to="/working" style={{ textDecoration: 'none'}}>
          <img src={sidetrek} width="550px"/>
          </Link>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Experience;
