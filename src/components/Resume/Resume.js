// Resume.js
import React from 'react';
import WorkExperience from './WorkExperience';
import Education from './Education.js';

const Resume = () => {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
        </div>
      </div> {/* /section-intro */}

      <WorkExperience />
      <Education />
    </section>
  );
}

export default Resume;
