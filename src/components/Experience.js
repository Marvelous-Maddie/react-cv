import React from 'react';

const Experience = () => {
  return (
  <div className="container-fluid p-5 shadow-sm" id="experience" style={{backgroundColor: "lightgrey"}}>
    <h2 className="text-center" style={{color: "#b30059"}}>Work Experience</h2>

    {/*IT-Training*/}
    <dl className="row justify-content-center mx-5 mt-5 mb-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2020-05/2020</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience1" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience1">
          Insiders Technologies GmbH, Kaiserslautern
        </a>
        <div className="collapse" id="collapseExperience1">
          <ul>
            <li>IT-Training</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Assistant*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>10/2019-03/2020</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience2" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience2">
          RLE Mobility GmbH, München
        </a>
        <div className="collapse" id="collapseExperience2">
          <ul>
            <li>Office assistant for the whole location</li>
            <li>Office organisation, reception, support of the staff as well as the managers</li>
            <li>Project execution and support, e.g. TISAX-Audit</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Lecturer*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2015-03/2018</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience3" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience3">
          Johannes Gutenberg-University, Mainz
        </a>
        <div className="collapse" id="collapseExperience3">
          <ul>
            <li>Lecturer for roman archaeology and geophysics at the department of classical studies</li>
            <li>Marking of assignments and exams</li>
            <li>Supervision of a bachelor thesis</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Project support*/}
    <dl className="row justify-content-center mx-5 my-2">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>02/2016-05/2016</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience4" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience4">
          RLE Mobility GmbH, Rüsselsheim
        </a>
        <div className="collapse" id="collapseExperience4">
          <ul>
            <li>Project support for harness design</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Excavator*/}
    <dl className="row justify-content-center mx-5 mt-2 mb-5">
      <dt className="col-6">
        <div className="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2014-12/2015</div>
      </dt>
      <dd className="col-6">
        <a className="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience5" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience5">
          GDKE Rheinland-Pfalz, Mainz
        </a>
        <div className="collapse" id="collapseExperience5">
          <ul>
            <li>Excavation employee</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
)}

export default Experience;
