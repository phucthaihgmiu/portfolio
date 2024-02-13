import React from 'react';
import architecture from '../../images/portfolio/architecture.png'

const Services = () => {
  return (
    <section id="about">
      <div class="row section-intro">
        <div class="col-twelve">

          <h5>About this website</h5>
          <h1>Want to learn more about this website?</h1>

          <div class="service-info">
            <p class="lead">You can access to <a href='https://github.com/phucthaihgmiu/portfolio'>https://github.com/phucthaihgmiu/portfolio</a> to learn more about the cloud architecture of this website </p>

            <img src={architecture} alt="Cloud Architecture" />
          </div>
        </div>
      </div>

    </section>
  );

};

export default Services;
