import React from 'react';
import Project from './Project';

// projects data
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    image: '/path-to-image-1.jpg', 
    liveLink: 'https://example.com/project-one',
    codeLink: 'https://github.com/yourusername/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    image: '/path-to-image-2.jpg', 
    liveLink: 'https://example.com/project-two',
    codeLink: 'https://github.com/yourusername/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    image: '/path-to-image-3.jpg', // Assuming each project has a unique image
    liveLink: 'https://example.com/project-three',
    codeLink: 'https://github.com/yourusername/project-three',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is a brief description of Project Four.',
    image: '/path-to-image-4.jpg', 
    liveLink: 'https://example.com/project-four',
    codeLink: 'https://github.com/yourusername/project-four',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'This is a brief description of Project Five.',
    image: '/path-to-image-5.jpg', 
    liveLink: 'https://example.com/project-five',
    codeLink: 'https://github.com/yourusername/project-five',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'This is a brief description of Project Six.',
    image: '/path-to-image-6.jpg', // Ensure each project might have its unique image
    liveLink: 'https://example.com/project-six',
    codeLink: 'https://github.com/yourusername/project-six',
  },
];

function Portfolio() {
  return (
    <div className="content-section">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
