import React from "react";
import "./FashionDesigner.css";

const fashionDesigns = [
  "/images/fashion1.jpg",
  "/images/fashion2.jpg",
  "/images/fashion3.jpg",
  "/images/fashion4.jpg",
];

const FashionDesigner = () => {
  return (
    <div className="fashion-container">
      <h1 className="fashion-title">👗 Fashion Designer</h1>

      <p className="fashion-intro">
        I express creativity through fabric and color. My designs blend
        tradition with modern aesthetics, made to reflect confidence, beauty,
        and individuality.
      </p>

      <div className="fashion-highlight">
        <div className="fashion-card">
          <h3>✨ My Strengths</h3>
          <ul>
            <li>Sketching & Outfit Planning</li>
            <li>Trend-based Styling</li>
            <li>Creative Pattern Making</li>
            <li>Fabric & Color Coordination</li>
            <li>Ethnic + Modern Fusion Wear</li>
          </ul>
        </div>
        <div className="fashion-quote">
          <p>
            “Designing is not just stitching clothes – it's creating confidence
            through cloth.”
          </p>
        </div>
      </div>

      <h2 className="gallery-heading">🎨 My Work Gallery</h2>
      <div className="fashion-gallery">
        {fashionDesigns.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Design ${index + 1}`}
            className="fashion-img"
          />
        ))}
      </div>
    </div>
  );
};

export default FashionDesigner;
