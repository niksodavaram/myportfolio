import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Development of Distributed Sensor Modules & Tactical Displays for 9LV Combat Management System (CMS)',
    role: 'Senior Software Engineer',
    description:
      'Developing and testing event-driven distributed sensor modules and Human Machine Interface Tactical Input Displays using Java Spring Boot backend, RTI-DDS middleware, Vue.js, and Electron.',
    duration: 'Nov 2024 - May 2025',
  },
  {
    title: 'Development of Card Swipe & Cash Error Recording Systems (CERS) Microservices',
    role: 'Senior Analyst Engineer',
    description:
      'Designed, developed, tested, and deployed Java Spring Boot microservices for Card Swipe and Cash Error Recording systems at NAB.',
    duration: 'Apr 2023 - Sep 2024',
  },
    {
    title: 'Development and Deployment of secure, reslient colud-native Java Spring Boot microservices for Energy APIs, ensuring CDR and ACCC complaince',
    role: 'Senior Associate Consultant',
    description:
      'Designed, developed, tested, and deployed Java Spring Boot microservices for Card Energy APIs, ensuring CDR and ACCC Complaince at Energyu Australia.',
    duration: 'Apr 2023 - Sep 2024',
  },
      {
    title: 'Development and Deployment of Greenfield Next-Gen Biosening Platform for Millar Instruments https://millar.com/Research/Pressure-Catheters/ wiuth University of Auckland R&D Group',
    role: 'Project Lead',
    description:
      'LEd end to end Java Spring Boot based Biosening platform',
    duration: 'Nov 2020 - Nov 2021',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-table">
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
               <th>Role</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.title}</td>
                <td>{project.role}</td>
                <td>{project.description}</td>
                <td>{project.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}