import React from 'react';

function AboutMe() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src="/bitmoji.JPG" alt="Avatar" style={{ width: '150px', borderRadius: '50%', marginRight: '20px', marginTop: '5px' }} /> {/* Add the avatar */}
      <div>
        <h1>About Me</h1>
        <p>Hello! I'm Joe McKenna, a full-stack developer with a heart that beats for coding and a mind that thrives on innovative solutions. My journey into tech began not in a classroom, but from a curiosity that grew into a passion, leading me to pivot my career towards technology. In April 2024, I completed the UCF Coding Bootcamp, a challenge I embraced to formalize my self-taught skills and immerse myself fully in the world of web development.</p>

        <p>What sets me apart isn't just my proficiency in HTML, CSS, JavaScript, React, Node.js, and MongoDB—it's my approach to problem-solving. I see puzzles not as obstacles but as opportunities to learn and grow. "Event Horizon," a project close to my heart, exemplifies this mindset. It was here that I bridged my love for movies and music with technology, creating an immersive platform that enhances how users discover entertainment.</p>

        <p>Beyond code, I believe in building applications that resonate with users, prioritizing intuitive design and seamless interactions. My goal is to contribute to projects that not only push technological boundaries but also make a meaningful impact on people's lives.</p>

        <p>As I look forward to the next step in my career, I'm eager to join a team that values innovation, continuous learning, and collaboration. I am excited to bring my unique perspective, relentless curiosity, and dedication to excellence to your team, contributing to projects that inspire and challenge me.</p>

        <p>My professional philosophy is rooted in the belief that at the intersection of creativity and technology lies the potential to innovate, solve real-world problems, and make a tangible impact. I am committed to lifelong learning, understanding that the fast-paced nature of technology requires an ongoing pursuit of knowledge and adaptability. Excellence, for me, is not a destination but a continuous journey of improvement and refinement.</p>
      </div>
    </div>
  );
}

export default AboutMe;
