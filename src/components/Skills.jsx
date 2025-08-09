import React from "react";
import "../styles/skills.css";

export default function Skills() {
  // Categories with related skills
  const categories = [
    {
      heading: "Languages",
      skills: [
        "Java (Intermediate)",
        "SQL (Intermediate)",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      heading: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Socket.IO",
        "CoreUI",
        "Mongoose",
        "bcryptjs",
        "jsonwebtoken (JWT)", 
        "Socket.IO",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      heading: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "Postman",
        "IntelliJ IDEA",
        "Eclipse",
        "Figma",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      heading: "Computer Science Fundamentals",
      skills: [
        "Object-Oriented Programming (OOPs)",
        "Operating Systems",
        "DBMS",
        "Computer Networks",
        "Data Structures & Algorithms (Learning Phase)",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="skill-card">
            <h3>{category.heading}</h3>
            <ul>
              {category.skills.map((skill, skillIdx) => (
                <li key={skillIdx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


