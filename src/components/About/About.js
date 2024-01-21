// About.js
import React from 'react';
import Intro from './Intro';
import Profile from './Profile';
import Skills from './Skills';
import Cv from './Cv';

const About = () => {
  return (
    <section id="about">      
        <Intro />
        <div class="row about-content">
          <Profile />
          <Skills />
        </div>

        <Cv />


    </section>
  );
}

export default About;
