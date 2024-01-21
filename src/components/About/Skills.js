// Skills.js
import React from 'react';

const Skills = () => {
  return (
    <div class="col-six tab-full">

    <h3>Skills</h3>


    <ul class="skill-bars">
        <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>Cobol</strong>
        </li>
        <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>Java, Springboot</strong>
        </li>
        <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>SQL, DB2</strong>
        </li>
        <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>Mainframe: JCL, CICS, VSAM</strong>
        </li>
        <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>IBM i Series (AS/400): CL, RPGLE</strong>
        </li>
        <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>RESTful API, SOAP API, SOA, Micro Services</strong>
        </li>

    </ul> 

</div>
  );
}

export default Skills;
