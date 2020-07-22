import React from 'react';

const Experience = () => {
  return (
  <div class="container-fluid p-5 shadow-sm" id="experience" style={{backgroundColor: "lightgrey"}}>
    <h2 class="text-center" style={{color: "#b30059"}}>Job Experience</h2>

    {/*IT-Training*/}
    <dl class="row justify-content-center mx-5 mt-5 mb-2">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2020-05/2020</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience1" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience1">
          Insiders Technologies GmbH, Kaiserslautern
        </a>
        <div class="collapse" id="collapseExperience1">
          <ul>
            <li>IT-Training</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Assistant*/}
    <dl class="row justify-content-center mx-5 my-2">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>10/2019-03/2020</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience2" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience2">
          RLE Mobility GmbH, München
        </a>
        <div class="collapse" id="collapseExperience2">
          <ul>
            <li>Office assistant for the whole location</li>
            <li>Office organisation, reception, support of the staff as well as the managers</li>
            <li>Project execution and support, e.g. TISAX-Audit</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Lecturer*/}
    <dl class="row justify-content-center mx-5 my-2">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2015-03/2018</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience3" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience3">
          Johannes Gutenberg-University, Mainz
        </a>
        <div class="collapse" id="collapseExperience3">
          <ul>
            <li>Lecturer for roman archaeology and geophysics at the department of classical studies</li>
            <li>Marking of assignments and exams</li>
            <li>Supervision of a bachelor thesis</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Project support*/}
    <dl class="row justify-content-center mx-5 my-2">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>02/2016-05/2016</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience4" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience4">
          RLE Mobility GmbH, Rüsselsheim
        </a>
        <div class="collapse" id="collapseExperience4">
          <ul>
            <li>Project support for harness design</li>
          </ul>
        </div>
      </dd>
    </dl>

    {/*Excavator*/}
    <dl class="row justify-content-center mx-5 mt-2 mb-5">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2014-12/2015</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience5" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapseExperience5">
          GDKE Rheinland-Pfalz, Mainz
        </a>
        <div class="collapse" id="collapseExperience5">
          <ul>
            <li>Excavation employee</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
)}

export default Experience;
