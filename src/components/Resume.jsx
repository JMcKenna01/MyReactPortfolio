import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>As a passionate learner and developer, I've honed my skills through intensive study and hands-on projects in a coding bootcamp. Below are some highlights of my journey and achievements.</p>

      {/* Coding Bootcamp Experience */}
      <section>
        <h2>Coding Bootcamp Experience</h2>
        <ul>
          <li>
            <strong>Coding Bootcamp Name</strong> - Completion Date
            <p>A rigorous, immersive program focused on full stack web development, covering technologies such as HTML, CSS, JavaScript, React, Node.js, and more.</p>
          </li>
          {/* List any specific achievements or notable projects */}
        </ul>
      </section>

{/* Skills */}
<section>
  <h2>Skills</h2>
  <ul>
    <li>HTML/CSS - Building responsive and accessible user interfaces.</li>
    <li>JavaScript (ES6+) - Writing modern and efficient JavaScript code.</li>
    <li>React - Developing dynamic and single-page applications (SPAs).</li>
    <li>Node.js - Creating server-side logic and APIs.</li>
    <li>Express.js - Building web applications and RESTful APIs with Node.js.</li>
    <li>MongoDB - Storing and querying data effectively in a NoSQL database.</li>
    <li>Git and GitHub - Version control and collaboration on software projects.</li>
    {/* Add more skills as needed */}
  </ul>
</section>


      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <p>Below are some projects I've developed or contributed to, showcasing my skills in full stack development.</p>
        <ul>
          <li>
            <strong>Project Name</strong> - <a href="https://github.com/yourgithubusername/projectname" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>Brief description of the project, technologies used, and your role/contribution.</p>
          </li>
          {/* Repeat for each project */}
        </ul>
      </section>

      {/* Resume Download (optional, if you have a detailed resume document) */}
      <section>
        <h2>Download My Resume</h2>
        <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      </section>
    </div>
  );
}

export default Resume;
