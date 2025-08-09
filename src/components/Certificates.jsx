import React from "react";
import "../styles/certificates.css";

export default function Certificates() {
  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      link: "#" // Certificate link or PDF
    },
    {
      title: "Java Full-Stack ",
      issuer: "Wipro",
      year: "2025",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="year">{cert.year}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="view-btn">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
