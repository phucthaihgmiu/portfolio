import React from 'react';

const Greeting = () => {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>

      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Hello there,</h5>
            <h1>I'm Hong Phuc, Thai (Kyo)</h1>
            <p className="intro-position">
              <span>Cobol</span>
              <span>Java Developer</span>
            </p>

            <a className="button stroke smoothscroll" href="#about" title="">
              More About Me
            </a>
          </div>
        </div>
      </div> {/* /intro-content */}
    </section> 
  );
};

export default Greeting;
