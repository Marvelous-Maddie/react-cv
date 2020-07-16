import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (handleClick) => {
  return (
    <header className="Header">
        <h1>Madlen Engel</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Job experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
    </header>
  )
}

export default Header;
