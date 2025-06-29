import React from "react";
import "./HomeDetails.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const talents = [
  {
    title: "Mehndi Designer",
    image: "/template/mehandi.png",
  },
  {
    title: "Fashion Designer",
    image: "/template/designer.png",
  },
  {
    title: "Web Developer",
    image: "/template/developer.png",
  },
  {
    title: "Canva Designer",
    image: "/template/canva.png",
  },
  {
    title: "Beauty Expert",
    image: "/images/beauty.jpg",
  },
];

const HomeDetails = () => {
  return (
    <div className="home-details">
      <h2 className="talents-heading">
        I’m a multi-talented creator from <span>Kurukshetra</span> — blending
        fashion, art, and technology.
        <br />
        My mission is to turn imagination into design, and design into impact.
      </h2>

      <p className="bio">
        I love to express creativity through everything I do — whether it's
        beautiful mehndi, modern fashion, powerful websites, or designing in
        Canva. I believe in giving the best experience to every client. ✨
      </p>

      <div className="talents-grid">
        {talents.map((talent, index) => (
          <div className="talent-card" key={index}>
            <img src={talent.image} alt={talent.title} />
            <h3>{talent.title}</h3>
          </div>
        ))}
      </div>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
      </div>

      <blockquote className="quote">
        “Design is intelligence made visible.” – Alina Wheeler
      </blockquote>
    </div>
  );
};

export default HomeDetails;
