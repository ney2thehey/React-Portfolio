

// export default Login;
import React from 'react';

function Resume() {
  return (
    <section>
      <div className="my-2">
      <p>
        Download my <a href="https://docs.google.com/document/d/1Lq9ziBRCK1vmUfchf1cjHQk2zzwNvE2z/edit">Resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;


