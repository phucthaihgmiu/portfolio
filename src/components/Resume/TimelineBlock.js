// TimelineBlock.js
import React from 'react';

const TimelineBlock = ({ title, date, organizationIcon, organization, description }) => {
    return (
        <div className="timeline-block">
            <div className="timeline-ico">
            <img src={organizationIcon} alt="Organization Icon" />
            </div>

            <div className="timeline-header">
                <h3>{title}</h3>
                <p>{date}</p>
            </div>

            <div class="timeline-content">
                <h4>{organization}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TimelineBlock;
