import React from "react";
import "../styles/home.css";
import regis from "../assets/regis.jpg"

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Harsh Sharma</span>
        </h1>
       <p>
  A passionate <span className="highlight">Full-Stack Developer</span> skilled in 
  <strong> JavaScript</strong>, <strong> Node.js</strong>, and <strong> React.js</strong>. 
  I enjoy creating scalable, efficient, and user-friendly web applications that provide real value to users.
</p>

        <div className="buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      {/* PHOTO SECTION */}
      <div className="home-photo">
        <img 
           src={regis} alt="Harsh Sharma" />

    
      </div>
    </section>
  );
}
