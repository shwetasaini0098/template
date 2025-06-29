import React from "react";
import "./MehandiDesigner.css";

const MehandiDesigner = () => {
  const images = ["/template/m.jpg", "/template/meh.jpg", "/template/me.jpg"];

  return (
    <div className="mehndi-container">
      <h2 className="mehndi-heading">
        Trending & Stylish Mehendi Designs For Different Occasions
      </h2>
      <div className="mehndi-gallery">
        {images.map((src, index) => (
          <div className="mehndi-img-wrapper" key={index}>
            <img
              src={src}
              alt={`Mehendi ${index + 1}`}
              className="mehndi-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MehandiDesigner;
