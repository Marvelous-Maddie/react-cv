import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../styles/contact.css";

const Contact = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" id="contact">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item text-center mx-5">
          <a class="nav-link" href="mailto:engel.madlen@googlemail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h5 className="d-inline-flex ml-2 mb-0 hide">Send a message</h5>
          </a>
        </li>
        <li class="nav-item text-center mx-5">
          <a class="nav-link" href="https://www.linkedin.com/in/madlen-engel-950b93188/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <h5 className="d-inline-flex ml-2 mb-0">Visit my LinkedIn Profile</h5>
          </a>
        </li>
        <li class="nav-item text-center mx-5">
          <a class="nav-link" href="https://github.com/Marvelous-Maddie">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <h5 className="d-inline-flex ml-2 mb-0 hide">Check my GitHub Repositories</h5>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Contact
