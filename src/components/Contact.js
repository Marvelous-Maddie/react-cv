import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item text-center mx-5 h5">
          <a class="nav-link" href="mailto:engel.madlen@googlemail.com"><FontAwesomeIcon icon={faEnvelope} /> Send me a message</a>
        </li>
        <li class="nav-item text-center mx-5 h5">
          <a class="nav-link" href="https://www.linkedin.com/in/madlen-engel-950b93188/"><FontAwesomeIcon icon={faLinkedin} /> Visit my LinkedIn Profile</a>
        </li>
        <li class="nav-item text-center mx-5 h5">
          <a class="nav-link" href="https://github.com/Marvelous-Maddie"><FontAwesomeIcon icon={faGithub} /> Check my GitHub Repositories</a>
        </li>
      </ul>
    </nav>
  )
}

export default Contact
