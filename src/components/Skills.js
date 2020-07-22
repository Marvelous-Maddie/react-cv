import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
  <div class="container-fluid text-center p-5 shadow-sm" id="skills">
    <h2 style={{color: "#b30059"}}>Skills</h2>
    <div class="d-flex flex-wrap m-5">
      <div class="d-inline-flex flex-column align-items-center m-2">
        <FontAwesomeIcon icon={faHtml5} size="3x" />
        <h5>HTML5</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "100%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>
)}

export default Skills;
