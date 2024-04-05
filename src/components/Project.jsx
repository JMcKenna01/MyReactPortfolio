import React from 'react';

function Project({ title, description, image, liveLink, codeLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Version</a>
      <br />
      <a href={codeLink} target="_blank" rel="noopener noreferrer">Code Repository</a>
    </div>
  );
}

export default Project;
