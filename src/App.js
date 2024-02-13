import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Hong Phuc Thai</title>
      </Helmet>

      <Navbar />
      {/*<Intro />*/}
      <About />
      <Resume />
      <Services />
      <Contact />
      

    </div>
  );
};

export default App;
