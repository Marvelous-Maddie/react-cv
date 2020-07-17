import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (handleClick) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
        <a class="navbar-brand mr-5" href="#">
          <h1>Madlen Engel</h1>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item h4">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item h4">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item h4">
            <a className="nav-link" href="#experience">Job experience</a>
          </li>
          <li className="nav-item h4">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item h4">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
