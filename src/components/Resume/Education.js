// Education.js
import React from 'react';
import TimelineBlock from './TimelineBlock';
import MIU_logo from '../../images/portfolio/MIU_logo.jpeg'
import KHTN_logo from '../../images/portfolio/KHTN_logo.jpeg'

const Education = () => {
  // Data for Education
  const educationData = [
    { 
        title: "Master degree", 
        date: "Apr 2022 - Feb 2024",  
        organization: "Maharishi International University",
        organizationIcon: MIU_logo,
        description: "Master of Computer Science",
    },
    { 
        title: "Bachelor degree", 
        date: "Sep 2005 - Sep 2009",  
        organization: "VNUHCM - University of Science",
        organizationIcon:KHTN_logo,
        description: "Bachelor of Computer Science", 
    },
    // Add more education items as needed
  ];

  return (
    <div className="row resume-timeline">
      <div className="col-twelve resume-header">
        <h2>Education</h2>
        <div className="timeline-wrap">
          {educationData.map((item, index) => (
            <TimelineBlock 
                key={index} 
                title={item.title} 
                date={item.date} 
                organizationIcon={item.organizationIcon} 
                organization={item.organization}
                description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
