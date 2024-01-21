// WorkExperience.js
import React from 'react';
import TimelineBlock from './TimelineBlock';
import Humana_logo from '../../images/portfolio/Humana_logo.jpeg'
import PRU_logo from '../../images/portfolio/PRU_logo.jpeg'
import AIA_logo from '../../images/portfolio/AIA_logo.jpeg'
import Aviva_logo from '../../images/portfolio/Aviva_logo.jpeg'
import GE_logo from '../../images/portfolio/GE_logo.jpeg'
import DXC_logo from '../../images/portfolio/DXC_logo.jpeg'
import IACP_logo from '../../images/portfolio/IACP_logo.jpeg'

const WorkExperience = () => {
    // Data for Work Experience
    const workExperienceData = [
        {
            title: "Mainframe Cobol Developer",
            date: "Jan 2023 - Present",
            organization: "Humana Inc (under KForce Inc & Tanisha System Inc)",
            organizationIcon: Humana_logo,
            description: (
                <ul>
                    <li>Delivered professional services to Humana Inc., overseeing technical leadership of a
                        team within an onshore-offshore model following Agile principles and SCRUM
                        methodologies.</li>
                    <li>Participated in projects to modernize healthcare operations, transitioning from
                        mainframe to the Azure Cloud platform.</li>
                    <li>Involved in the end-to-end process, including designing, developing, testing,
                        implementing, and maintaining healthcare applications.</li>
                    <li>A diverse set of technologies used, including Mainframe, z/OS, COBOL, JCL, CICS,
                        DB2, SQL, z/OS connect, FileAid, AbendAid, EXPEDITER, CA7, FTP, MVS, ISPF, TSO,
                        JSON, IDMS, microservices, Kafka, RESTful API, SNOW, ISPW, PLATINUM, and more.</li>
                </ul>
            )
        },
        {
            title: "Application Consultant",
            date: "Oct 2018 - Apr 2022",
            organization: "Prudential Assurance Company Singapore (under Prime Consulting Services LTD)",
            organizationIcon: PRU_logo,
            description: (
                <ul>
                    <li>Delivered professional services to Prudential Singapore, contributing to the
                        customization of their life and annuities insurance system operating on IBM i Series
                        / AS400 through various projects</li>
                    <li>Engaged in all stages of the software development life cycle (SDLC) within Agile and
                        Kanban principles</li>
                    <li>Collaborated with the Business Analyst team and users to clarify requirements from
                        functional specifications, subsequently translating them into technical solutions
                        specified in technical documentation. Primarily focused on functionalities such as
                        configuring New Products, Policy Servicing, Claims, Finance, Payment services, and
                        more</li>
                    <li>Involved in the design, development, testing, implementation, and maintenance of
                        applications, while also providing support for User Acceptance Testing (UAT) and
                        handling production incidents</li>
                    <li>A diverse set of technologies used, including IBM iSeries, AS400, COBOL/400, CL,
                        RPGLE, DB2, SQL, online and batch job processing, IBM MQ, microservices, RESTful
                        API, and more</li>
                </ul>
            )
        },
        {
            title: "Technical Analyst",
            date: "Dec 2017 - Oct 2018",
            organization: "AIA Singapore",
            organizationIcon: AIA_logo,
            description: (
                <ul>
                    <li>Contributed to internal projects to customize the life and annuities insurance
                        system on IBM i Series / AS400.</li>
                    <li>Engaged in all aspects of the software development life cycle (SDLC) following
                        Kanban principles.</li>
                    <li>Collaborated with the Business Analyst team and users to elucidate requirements from
                        functional specifications, subsequently translating them into technical solutions
                        outlined in technical specifications. Primarily focused on functionalities such as
                        claims and payment services.</li>
                    <li>Involved in the design, development, testing, implementation, and maintenance of
                        applications.</li>
                    <li>Provided support for User Acceptance Testing (UAT) and addressed production
                        incidents.</li>
                    <li>A diverse set of technologies used, including IBM iSeries, AS400, COBOL/400, CL,
                        RPGLE, DB2, SQL, online and batch job processing, IBM MQ, microservices, RESTful
                        API, and more.</li>
                </ul>
            )
        },
        {
            title: "Application Analyst",
            date: "Feb 2016 - Dec 2017",
            organization: "Aviva Singapore (under U3 Infotech and Blue Star Infogain)",
            organizationIcon: Aviva_logo,
            description: (
                <ul>
                    <li>Enhanced AVIVA Singapore's life and annuities insurance system on IBM i Series /
                        AS400.</li>
                    <li>Engaged in all stages of the software development life cycle (SDLC) following Kanban
                        principles.</li>
                    <li>Collaborated with the Business Analyst team and users to clarify requirements from
                        functional specifications, translating them into technical solutions in technical
                        specifications. Mainly focused on functionalities such as setting up new products
                        and claims.</li>
                    <li>Involved in the design, development, testing, implementation, and maintenance of
                        applications.</li>
                    <li>Provided support for User Acceptance Testing (UAT) and addressed production
                        incidents.</li>
                    <li>A diverse set of technologies used, including IBM iSeries, AS400, COBOL/400, CL,
                        RPGLE, DB2, SQL, online and batch job processing, IBM MQ, microservices, RESTful
                        API, and more.</li>
                </ul>
            )
        },
        {
            title: "Senior Software Engineer",
            date: "Jul 2015 - Feb 2016",
            organization: "GREAT EASTERN (Under GMA Tech Consulting)",
            organizationIcon: GE_logo,
            description: (
                <ul>
                    <li>Enhanced the life and annuities insurance system at Great Eastern Life, operating on
                        IBM i Series / AS400.</li>
                    <li>Engaged in all facets of the software development life cycle (SDLC) following Kanban
                        principles.</li>
                    <li>Collaborated with the Business Analyst team and users to elucidate requirements from
                        functional specifications, subsequently translating them into technical solutions
                        detailed in technical specifications. Mainly concentrated on functionalities such as
                        setting up new products and report generation.</li>
                    <li>Involved in the design, development, testing, implementation, and maintenance of
                        applications.</li>
                    <li>Provided support for User Acceptance Testing (UAT) and addressed production
                        incidents.</li>
                    <li>A diverse set of technologies used, including IBM iSeries, AS400, COBOL/400, CL,
                        RPGLE, DB2, SQL, online and batch job processing, and more.</li>
                </ul>
            )
        },
        {
            title: "Senior Software Engineer",
            date: "Aug 2011 - Jul 2015",
            organization: "DXC Technology",
            organizationIcon: DXC_logo,
            description: (
                <ul>
                    <li>Modernized the core legacy insurance system for Zurich Farmers - USA and customized
                        the life and annuities insurance systems for AIA - Singapore and Phu Hung Life –
                        Vietnam.</li>
                    <li>Played the role of a team lead, providing guidance to team members on daily tasks to
                        enhance their understanding of the system, improve technical skills, and expand
                        domain knowledge.</li>
                    <li>Assigned tasks to team members and facilitated code reviews to ensure the quality of
                        deliveries.</li>
                    <li>Leveraged a wide range of technologies, including mainframe, z/OS, IBM i Series,
                        AS400, COBOL, CICS, JCL, SQL, DB2, VSAM, COBOL/400, RPGLE, CL, CA7, IBM SPUFI, IBM
                        ENDEVOR, Xpediter, Platinum, Syncsort, DFSORT, IBM MQ, online and batch job
                        processing, MVS, ISPF, TSO , Java, RESTful API, SOAP API, microservices, and
                        Service-Oriented Architecture (SOA) under Agile Application Development, Scrum, and
                        Kanban methodologies.</li>
                </ul>
            )
        },
        {
            title: "Software Engineer",
            date: "Jul 2010 - Feb 2011",
            organization: "DXC Technology",
            organizationIcon: DXC_logo,
            description: (
                <ul>
                    <li>Modernized the core legacy banking system for FSS Banking - USA.</li>
                    <li>Leveraged a wide range of technologies, including mainframe, z/OS, IBM i Series,
                        AS400, COBOL, CICS, JCL, SQL, DB2, VSAM, COBOL/400, RPGLE, CL, CA7, IBM SPUFI, IBM
                        ENDEVOR, Xpediter, Platinum, Syncsort, DFSORT, IBM MQ, online and batch job
                        processing, MVS, ISPF, TSO , Java, SOAP API, microservices, and Service-Oriented
                        Architecture (SOA) under Agile Application Development, Scrum, and Kanban
                        methodologies.</li>
                </ul>
            )
        },
        {
            title: "Software Engineer",
            date: "Jul 2009 - Jul 2010",
            organization: "IACP Asia",
            organizationIcon: IACP_logo,
            description: (
                <ul>
                    <li>Enhanced core insurance system for AXA Finance.</li>
                    <li>Contributed to the development team to administer coding changes.</li>
                    <li>Performed unit tests and documented test data.</li>
                    <li>Prepared documentation for system enhancements.</li>
                    <li>Technologies used: mainframe, z/OS, IBM i Series, AS400, COBOL, CICS, JCL, SQL, DB2,
                        TSO, VSAM, CA7, IBM SPUFI, IBM ENDEVOR, Xpediter, Platinum, Syncsort, DFSORT, IBM
                        MQ, online and batch job processing, MVS, ISPF, TSO.</li>
                </ul>
            )
        },
        // Add more work experience items as needed
    ];

    return (
        <div className="row resume-timeline">
            <div className="col-twelve resume-header">
                <h2>Work Experience</h2>
                <div className="timeline-wrap">
                    {workExperienceData.map((item, index) => (
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

export default WorkExperience;
