import React from "react";
import "../styles/education.css";

export default function Education() {
  // Education details (easily editable in future)
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      college: "MIET College, Meerut",
      year: "2022 - 2026",
      branch:"Computer Science(AIML)",
      details: "Currently pursuing B.Tech in IT. Actively building projects in Full stack technologies."
    },
    {
      degree: "Higher Secondary (12th)",
      college: "Hastinapur Public School",
      year: "2021 - 2022",
      details: "Focused on Science (PCM). "
    },
    {
      degree: "Secondary (10th)",
      college:"Hastinapur Public School",
      year: "2019 - 2020",
      details: "Participating in extra-curricullam activities and focus on studies."
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      
      {/* Education Cards */}
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <p className="college">{edu.college}</p>
            <p className="year">{edu.year}</p>
             <p className="score">{edu.score}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
