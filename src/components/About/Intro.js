// Intro.js
import React from 'react';
import avatar from '../../images/portfolio/avatar.jpeg'
const Intro = () => {
    return (
        <div class="row section-intro">
            <div class="col-twelve">

                <h5>Hi All,</h5>
                <h1>Hong Phuc, Thai.</h1>
                <p className="intro-position">
                    <span>Cobol | Java Developer</span>
                </p>

                <div class="intro-info">

                    <img src={avatar} alt="Profile Picture" />

                    <p class="lead">I am a Senior Software Engineer with an impressive experience of over 13 years in
                        the Insurance, Healthcare, and Banking industries. I have successfully undertaken projects to modernize and
                        customize core legacy systems, along with seamless integration with diverse technologies.</p>
                </div>

            </div>
        </div>
    );
}

export default Intro;
