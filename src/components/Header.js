import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (handleClick) => {
  return (
    <header id="home">
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark shadow-sm">
        <a className="navbar-brand" href="#home" style={{color: "#e87a2a"}}>
          <h1>Madlen Engel</h1>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#about">Portfolio</a>
          </li>
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#experience">Work experience</a>
          </li>
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item mr-4 h4">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
