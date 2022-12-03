import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer.js';
import Experience from './Experience/Experience';
import logo from './assets/logo.png';
import './App.css';


function Working() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
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
            <div className="header-title-wrap">
            <h1 className="header">Oops!</h1>
            <p className="description">This page is currently a work-in-progress. Come back soon!</p>
            </div>
        <Footer/>
        <div className="subtract"/>
        </div>
    );
    }

export default Working;