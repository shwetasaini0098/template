import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-cards">
        <div className="about-card fade-in">
          <p>
            Sometimes I gave my 100% and still got ignored.
            Sometimes I worked like a team... even when I was the only one in it.
          </p>
        </div>

        <div className="about-card fade-in delay-1">
          <p>
            I’ve trusted people who disappeared, and still stood tall with my art and effort.
            I believe in creating — even if nobody claps.
          </p>
        </div>

        <div className="about-card fade-in delay-2">
          <p>
            Because design is not just a skill to me — it's my therapy, my strength, my identity.
            I don't just work for clients, I work for my soul.
          </p>
        </div>
      </div>

      <p className="quote">“Strong souls shine even in silence.”</p>
    </section>
  );
};

export default AboutMe;
