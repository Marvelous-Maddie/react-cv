import React from 'react';

const Experience = () => {
  return (
  <div class="container-fluid p-5 shadow-sm" id="experience" style={{backgroundColor: "lightgrey"}}>
    <h2 class="text-center" style={{color: "#b30059"}}>Job Experience</h2>
    <dl class="row justify-content-center m-5">
      <dt class="col-6">
        <div class="d-flex justify-content-end" style={{fontWeight: "bold"}}>04/2020-05/2020</div>
      </dt>
      <dd class="col-6">
        <a class="d-flex justify-content-start" data-toggle="collapse" href="#collapseExperience1" style={{fontWeight: "bold", color: "black"}} role="button" aria-expanded="false" aria-controls="collapse">
          Insiders Technologies GmbH, Kaiserslautern
        </a>
        <div class="collapse" id="collapseExperience1">
          <ul>
            <li>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</li>
            <li>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
)}

export default Experience;
