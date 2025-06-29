import React from "react";
import "./TalentDetails.css"; // You can reuse styling

const WebDesigner = () => {
  return (
    <div className="talent-details">
      <h1>Web Designer</h1>
      <p>
        I specialize in creating beautiful and responsive websites using HTML,
        CSS, JavaScript, and React.
      </p>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React & Vite</li>
        <li>Responsive Design</li>
        <li>Figma to Code</li>
      </ul>
      <p>
        <strong>Experience:</strong> 2+ years
      </p>
      <p>
        <strong>Tools:</strong> VS Code, GitHub, Chrome DevTools
      </p>
    </div>
  );
};

export default WebDesigner;
