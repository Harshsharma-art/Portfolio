import React from "react";
import "../styles/projects.css";

export default function Projects() {
  // My Projects Data
  const projects = [
    {
      title: "Talky – Real-Time Messaging App",
      description: "Built a MERN-based messaging app with real-time chat, media sharing, group conversations, JWT authentication, and dynamic routing using React Router.",
      tech: ["React.js", "Node.js", "Express.js","MongoDB", "Tailwind CSS"],
      github: "https://github.com/simran/soulinner-circle"
    },
    {
      title: "Travel Agency",
      description: " Developed a MERN stack travel planning website offering custom itineraries and budget-based recommendations.",
      tech: ["React.js", "Node.js", "Express.js","TypeScript","MongoDB", "REST APIs"],
      github: "https://github.com/simran/video-detection"
    },
    {
      title: "To-Do List App – Personal Task Management",
      description: "Built a responsive To-Do List App with add, update, delete features, localStorage persistence, and a clean, user-friendly interface for daily task management.",
      tech: ["React.js", "Tailwind CSS", "HTML", "CSS"],
      github: "https://github.com/simran/journal-app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech Used:</strong> {project.tech.join(", ")}
              </p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
