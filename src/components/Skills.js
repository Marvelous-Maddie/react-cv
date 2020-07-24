import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faTasks, faComment, faChalkboard, faPen, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faAdobe, faHtml5, faCss3, faBootstrap, faJsSquare, faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
  <div class="container-fluid text-center p-5 shadow-sm" id="skills">
    <h2 style={{color: "#b30059"}}>Skills</h2>
    <div class="d-flex justify-content-center flex-wrap mx-5">

    {/*MS Office*/}
    <div class="d-inline-flex flex-column align-items-center m-5">
      <FontAwesomeIcon icon={faMicrosoft} size="4x" />
      <h5 class="my-2">MS Office</h5>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    {/*Adobe CS*/}
    <div class="d-inline-flex flex-column align-items-center m-5">
      <FontAwesomeIcon icon={faAdobe} size="4x" />
      <h5 class="my-2">Adobe CS</h5>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    {/*HTML*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faHtml5} size="4x" />
        <h5 class="my-2">HTML5</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*CSS*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faCss3} size="4x" />
        <h5 class="my-2">CSS3</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Bootstrap*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faBootstrap} size="4x" />
        <h5 class="my-2">Bootstrap</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Javascript*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faJsSquare} size="4x" />
        <h5 class="my-2">Javascript</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*React*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faReact} size="4x" />
        <h5 class="my-2">React</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Node*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faNode} size="4x" />
        <h5 class="my-2">Node.js</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*API*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faServer} size="4x" />
        <h5 class="my-2">APIs</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*SQL*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faDatabase} size="4x" />
        <h5 class="my-2">SQL</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*MongoDB*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faDatabase} size="4x" />
        <h5 class="my-2">MongoDB</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Git/GitHub*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGithub} size="4x" />
        <h5 class="my-2">Git/GitHub</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Project Management*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faTasks} size="4x" />
        <h5 class="my-2">Project Management</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Presentation*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faComment} size="4x" />
        <h5 class="my-2">Presentation Skills</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Training*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faChalkboard} size="4x" />
        <h5 class="my-2">Training</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*Writing*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faPen} size="4x" />
        <h5 class="my-2">Writing Skills</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*German*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 class="my-2">German</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*English*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 class="my-2">English</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {/*French*/}
      <div class="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 class="my-2">French</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

    </div>
  </div>
)}

export default Skills;
