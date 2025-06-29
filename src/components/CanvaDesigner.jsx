import React from "react";
import "./TalentDetails.css";

const CanvaDesigner = () => {
  return (
    <div className="talent-details">
      <h1>Canva Designer</h1>

      {/* Intro Section */}
      <div className="canva-section">
        <p>
          As a Canva Designer, I bring creativity and clarity to every visual I create — from social media posts to
          resume templates. I combine design trends with simplicity to produce eye-catching designs.
        </p>
      </div>

      {/* What I Design */}
      <div className="canva-section highlight-box">
        <h3>What I Design</h3>
        <ul>
          <li>Social Media Posts (Instagram, Facebook)</li>
          <li>Flyers, Posters & Invitations</li>
          <li>Resumes & Business Cards</li>
          <li>Presentations & Portfolios</li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="canva-gallery">
        <img src="/assets/canva1.jpg" alt="Instagram Post" />
        <img src="/assets/canva2.jpg" alt="Poster Design" />
        <img src="/assets/canva3.jpg" alt="Resume Template" />
        <img src="/assets/canva4.jpg" alt="Presentation Slide" />
      </div>

      {/* Skills & Tools */}
      <div className="canva-section">
        <h3>Skills & Tools</h3>
        <ul>
          <li>Canva Pro Expertise</li>
          <li>Typography & Color Palette</li>
          <li>Clean, Professional Layouts</li>
          <li>Creative Use of Templates</li>
        </ul>
      </div>

      {/* Quote or Tagline */}
      <div className="canva-quote">
        <p>“Design is not just what it looks like — it's how it works.”</p>
        <h4>- Shweta Rani</h4>
      </div>
    </div>
  );
};

export default CanvaDesigner;
