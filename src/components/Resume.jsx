import React from 'react';

function Resume() {
  return (
    <div className="resume">
      {/* Resume Download */}
      <section>
        <h2>Download My Resume</h2>
        <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      </section>

      <h1>Resume</h1>
      <h2>Joe McKenna-</h2>
      <p>As a passionate learner and developer, I've honed my skills through intensive study and hands-on projects in a coding bootcamp. Below are some highlights of my journey and achievements.</p>

      {/* Skills */}
      <section>
  <h2>Skills</h2>
  <div className="skills-grid">
    {[
      { src: "/HTML.CSS.webp", alt: "HTML/CSS", text: "HTML/CSS - Building responsive and accessible user interfaces." },
      { src: "/javascript.webp", alt: "JavaScript", text: "JavaScript (ES6+) - Writing modern and efficient JavaScript code." },
      { src: "/react.webp", alt: "React", text: "React - Developing dynamic and single-page applications (SPAs)." },
      { src: "/node.js.webp", alt: "Node.js", text: "Node.js - Creating server-side logic and APIs." },
      { src: "/express.js.webp", alt: "Express.js", text: "Express.js - Building web applications and RESTful APIs with Node.js." },
      { src: "/mongodb.webp", alt: "MongoDB", text: "MongoDB - Storing and querying data effectively in a NoSQL database." },
      { src: "/git.webp", alt: "Git", text: "Git and GitHub - Version control and collaboration on software projects." }
    ].map(skill => (
      <div key={skill.alt} className="skill-item">
        <img src={skill.src} alt={skill.alt} className="skill-image" />
        <p>{skill.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <p>Below are some projects I've developed or contributed to, showcasing my skills in full stack development.</p>
        <ul>
          <li>
            <strong>Event Horizon</strong> - <a href="https://github.com/JMcKenna01/Event-Horizon" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>"Event Horizon" is an innovative web platform that merges a comprehensive collection of movies and music into a single, interactive experience. My role in this project involved leveraging my expertise in JavaScript for the development of core functionalities and integrating the Bulma CSS framework to craft an intuitive and user-friendly interface. I was responsible for implementing the application's search functionality, allowing users to effortlessly explore a vast entertainment database powered by the MoviesDatabase API and Shazam API. This included fetching and displaying detailed information on movies and music, such as cast details, artist bios, and track listings. Additionally, I designed the application's responsive layout, ensuring a seamless and consistent user experience across various devices. Through creative problem-solving and effective collaboration, I contributed to "Event Horizon" becoming a dynamic platform that enriches the user's journey in discovering movies and music.</p>
          </li>
          <li>
            <strong>TaskPro</strong> - <a href="https://github.com/JMcKenna01/TaskPro" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>Introducing TaskPro, the ultimate solution for efficient task and role management. Our innovative web application offers a seamless platform for organizing tasks and assigning roles to employees with ease. Increase productivity and streamline your team's workflow like never before. Say goodbye to chaos and hello to impeccable organization with TaskPro.</p>
          </li>
          <li>
            <strong>EcoEcomEngine</strong> - <a href="https://github.com/JMcKenna01/EcoEcomEngine" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p>The E-Commerce Back End project is a server-side application that enables the fundamental operations of an e-commerce website. It utilizes Express.js and Sequelize to interact with a MySQL database, allowing users to perform CRUD operations on products, categories, and tags.</p>
          </li>
        </ul>
      </section>

      {/* Coding Bootcamp Experience */}
      <section>
        <h2>Coding Bootcamp Experience</h2>
        <ul>
          <li>
            <strong>UCF Coding BootCamp</strong> - Completion Date - 4/09/24
            <p>A rigorous, immersive program focused on full stack web development, covering technologies such as HTML, CSS, JavaScript, React, Node.js, and more.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
