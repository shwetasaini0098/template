import React from "react";
import { Link } from "react-router-dom";
import "./Talents.css";

const Talents = () => {
  return (
    <div className="talent-page">
      <h1 className="talent-heading">My Talents</h1>
      <div className="talent-container">
        <Link to="/talents/web-designer" className="talent-card">
          <img src="/assets/webdev.jpg" alt="Web Designer" />
          <h3>Web Designer</h3>
        </Link>
        <Link to="/talents/canva-designer" className="talent-card">
          <img src="/assets/canva.jpg" alt="Canva Designer" />
          <h3>Canva Designer</h3>
        </Link>
        <Link to="/talents/mehndi-designer" className="talent-card">
          <img src="/assets/mehndi.jpg" alt="Mehndi Designer" />
          <h3>Mehndi Designer</h3>
        </Link>
        <Link to="/talents/fashion-designer" className="talent-card">
          <img src="/assets/fashion.jpg" alt="Fashion Designer" />
          <h3>Fashion Designer</h3>
        </Link>
        <Link to="/talents/beauty-parlour" className="talent-card">
          <img src="/assets/beauty.jpg" alt="Beauty Parlour" />
          <h3>Beauty Parlour</h3>
        </Link>
      </div>
    </div>
  );
};

export default Talents;
