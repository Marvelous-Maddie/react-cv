import React from 'react';

const Education = () => {
  return (
  <div className="container-fluid p-5 shadow-sm" id="education" style={{backgroundColor: "lightgrey"}}>
    <h2 className="text-center" style={{color: "#b30059"}}>Education</h2>


    {/*edX*/}
    <dl className="row justify-content-center mx-5 mt-5 mb-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>Since 02/2021</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation0" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation1">
          <span>Online courses on edX.org <small>(click to open)</small></span>
        </a>
        <div className="collapse" id="collapseEducation0">
          <ul>
            <li>Applied Scrum for Agile Project Management (4 week online course)</li>
            <li>Building Modern Node.js Applications on AWS (6 week online course)</li>
          </ul>
        </div>
      </dd>
    </dl>
    
    {/*WBS Coding School*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>06/2020-09/2020</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation1" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation1">
          <span>WBS Coding School, Berlin</span>
        </a>
        <div className="collapse" id="collapseEducation1">
          <ul>
            <li>4 months full-time training full stack app & web development</li>
            <li>Frontend: HTML5 | CSS3 | Javascript | React | Redux</li>
            <li>Backend: Node.js | Express.js | Restful API | Databases (SQL/NoSQL)</li>
            <li>Additional: UX/UI Fundamentals | SEO for developers | DevOps (Monitoring, CI/CD, Deployment) | Software Testing | Agile Methodologies (Scrum) | Project Management</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*PhD University Mainz*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>10/2014-11/2021</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation2" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation2">
          Johannes Gutenberg-University, Mainz
        </a>
        <div className="collapse" id="collapseEducation2">
          <ul>
            <li>Doctoral studies in roman archaeology, degree: Dr. phil.</li>
            <li>Thesis: Das römerzeitliche Gräberfeld Speyer-Marienheim</li>
            <li>Funded by Gerda Henkel Stiftung and supported by GDKE Rheinland-Pfalz</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*M.A. university Mainz*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>10/2007-04/2014</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation3" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation3">
          Johannes Gutenberg-University, Mainz
        </a>
        <div className="collapse" id="collapseEducation3">
          <ul>
            <li>Studies in prehistoric archaeology, roman archaeology, classics and ancient history at the university of Mainz, the university of Frankfurt/Main and the university of applied sciences Mainz, degree: M.A. (mark 1.3)</li>
            <li>Magister-thesis (mark 1.0) honoured by the FB07 - Geschichts- und Kulturwissenschaften, university of Mainz</li>
            <li>Several internships in Germany, France and Great Britain in excavation, geophysical prospection and museum concept</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Year abroad Durham university*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>09/2010-06/2011</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation4" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation4">
          Durham University, Durham
        </a>
        <div className="collapse" id="collapseEducation4">
          <ul>
            <li>Year abroad in in prehistoric archaeology, roman archaeology, classics and ancient history</li>
            <li>Funded by the Erasmus programme of the EU</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Gymnasium*/}
    <dl className="row justify-content-center mx-5 mt-2 mb-5">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>08/1998-03/2007</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseEducation5" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseEducation5">
          Nordpfalzgymnasium, Kirchheimbolanden
        </a>
        <div className="collapse" id="collapseEducation5">
          <ul>
            <li>Grammar school, degree: Abitur (mark 2.0)</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
)}

export default Education;
