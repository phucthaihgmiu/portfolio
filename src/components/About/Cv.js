// Cv.js
import React from 'react';
import resume from '../../document/Hong Phuc Thai_Resume.pdf'

const Cv = () => {
  return (
    <div className="row button-section">
      <div className="col-twelve">
        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
        <a href={resume} title="Download CV" className="button button-primary">Download CV</a>
      </div>
    </div>
  );
}

export default Cv;
