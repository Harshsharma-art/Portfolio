import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Let’s connect! You can reach me directly through the details below.</p>

      <div className="contact-info">
        <p><strong>Email:</strong> hasrhsharma91@gmail.com</p>
        <p><strong>Phone:</strong> +91 9760108221</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="www.linkedin.com/in/harsh-sharma-a0913024b" 
            target="_blank" 
            rel="noreferrer"
          >
           linkedin.com/in/harsh-sharma-a0913024b" 
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a 
            href="https://github.com/Harshsharma-art"
            target="_blank" 
            rel="noreferrer"
          >
          github.com/Harshsharma-art
          </a>
        </p>
      </div>
    </section>
  );
}


