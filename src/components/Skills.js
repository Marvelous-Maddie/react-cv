import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer, faTasks, faComment, faChalkboard, faPen, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faAdobe, faHtml5, faCss3, faBootstrap, faJsSquare, faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
  <div className="container-fluid text-center p-5 shadow-sm" id="skills">
    <h2 style={{color: "#b30059"}}>Skills</h2>
    <div className="d-flex justify-content-center flex-wrap mx-5">

    {/*MS Office*/}
    <div className="d-inline-flex flex-column align-items-center m-5">
      <FontAwesomeIcon icon={faMicrosoft} size="4x" />
      <h5 className="my-2">MS Office</h5>
    </div>

    {/*Adobe CS*/}
    <div className="d-inline-flex flex-column align-items-center m-5">
      <FontAwesomeIcon icon={faAdobe} size="4x" />
      <h5 className="my-2">Adobe CS</h5>
    </div>

    {/*HTML*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faHtml5} size="4x" />
        <h5 className="my-2">HTML5</h5>
      </div>

      {/*CSS*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faCss3} size="4x" />
        <h5 className="my-2">CSS3</h5>
      </div>

      {/*Bootstrap*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faBootstrap} size="4x" />
        <h5 className="my-2">Bootstrap</h5>
      </div>

      {/*Javascript*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faJsSquare} size="4x" />
        <h5 className="my-2">Javascript</h5>
      </div>

      {/*React*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faReact} size="4x" />
        <h5 className="my-2">React</h5>
      </div>

      {/*Node*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faNode} size="4x" />
        <h5 className="my-2">Node.js</h5>
      </div>

      {/*API*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faServer} size="4x" />
        <h5 className="my-2">APIs</h5>
      </div>

      {/*SQL*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faDatabase} size="4x" />
        <h5 className="my-2">SQL</h5>
      </div>

      {/*MongoDB*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faDatabase} size="4x" />
        <h5 className="my-2">MongoDB</h5>
      </div>

      {/*Git/GitHub*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGithub} size="4x" />
        <h5 className="my-2">Git/GitHub</h5>
      </div>

      {/*Project Management*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faTasks} size="4x" />
        <h5 className="my-2">Project Management</h5>
      </div>

      {/*Presentation*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faComment} size="4x" />
        <h5 className="my-2">Presentation Skills</h5>
      </div>

      {/*Training*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faChalkboard} size="4x" />
        <h5 className="my-2">Training</h5>
      </div>

      {/*Writing*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faPen} size="4x" />
        <h5 className="my-2">Writing Skills</h5>
      </div>

      {/*German*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 className="my-2">German</h5>
      </div>

      {/*English*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 className="my-2">English</h5>
      </div>

      {/*French*/}
      <div className="d-inline-flex flex-column align-items-center m-5">
        <FontAwesomeIcon icon={faGlobeEurope} size="4x" />
        <h5 className="my-2">French</h5>
      </div>

    </div>
  </div>
)}

export default Skills;
