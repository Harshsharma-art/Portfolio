import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Reach me at:{" "}
        <a href="mailto:hasrhsharma91@gmail.com">hasrhsharma91@gmail.com</a>
      </p>
      <p>© {new Date().getFullYear()} Harsh Sharma. All rights reserved.</p>
    </footer>
  );
}
