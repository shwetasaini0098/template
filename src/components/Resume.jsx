import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>

      {/* === Profile Section === */}
      <section className="section profile">
        <h3>👩‍💻 Profile</h3>
        <p>
          <strong>Name:</strong> Shweta Rani
        </p>
        <p>
          <strong>Location:</strong> V.P.O. – Bargat Shahpur, Tehsil – Ladwa,
          Distt. – Kurukshetra, Haryana, Pin – 136156
        </p>
        <p>
          <strong>Phone:</strong> 8570066162
        </p>
        <p>
          <strong>Email:</strong> shwetarani0098@gmail.com
        </p>
        <p>
          <strong>Title:</strong> Web Designer | Developer | Multi-Talented
          Creator
        </p>
        <p>
          <strong>Objective:</strong> To obtain a challenging position as a Web
          Designer where I can utilize my skills in web designing and grow
          professionally while contributing to the goals of the organization.
        </p>
      </section>

      {/* === Certifications === */}
      <section className="section certifications">
        <h3>📜 Certifications</h3>
        <ul>
          <li>PHP Training - 6-month course completed in 2023</li>
          <li>PTE (Pearson Test of English) - Overall Score: 6.5</li>
        </ul>
      </section>

      {/* === Work History === */}
      <section className="section work-history">
        <h3>💼 Work History</h3>
        <p>Fresher</p>
      </section>

      {/* === Education Section === */}
      <section className="section education">
        <h3>🎓 Education</h3>

        <div className="edu-card-new">
          <div className="photo-box">
            <img src="/template/kuk.png" alt="MSc" />
          </div>
          <div className="text-outside">
            <h4>M.Sc.: Computer Science</h4>
            <p>Kurukshetra University Kurukshetra</p>
            <p>
              <strong>Year:</strong> 2024
            </p>
            <p>
              <strong>Status:</strong> Currently Pursuing
            </p>
          </div>
        </div>

        <div className="edu-card-new">
          <div className="photo-box">
            <img src="/template/arya.png" alt="BCA" />
          </div>
          <div className="text-outside">
            <h4>BCA: Bachelor of Computer Applications</h4>
            <p>Arya Kanya Mahavidyalaya Shahabad</p>
            <p>
              <strong>Year:</strong> 2022
            </p>
            <p>
              <strong>Status:</strong> Completed
            </p>
          </div>
        </div>

        <div className="edu-card-new">
          <div className="photo-box">
            <img src="/images/12th.jpg" alt="12th" />
          </div>
          <div className="text-outside">
            <h4>12th: HBSE</h4>
            <p>Saini Senior Secondary School - Babain (kkr)</p>
            <p>
              <strong>Year:</strong> 2019
            </p>
            <p>
              <strong>Status:</strong> Passed
            </p>
          </div>
        </div>

        <div className="edu-card-new">
          <div className="photo-box">
            <img src="/template/deep.png" alt="10th" />
          </div>
          <div className="text-outside">
            <h4>10th: HBSE</h4>
            <p>Deep Public Senior Secondary School - Tatka (kkr)</p>
            <p>
              <strong>Year:</strong> 2017
            </p>
            <p>
              <strong>Status:</strong> Passed
            </p>
          </div>
        </div>
      </section>

      {/* === Languages === */}
      <section className="section languages">
        <h3>🌐 Languages</h3>
        <p>English, Hindi</p>
      </section>

      {/* === Skills Section === */}
      <section className="section skills">
        <h3>🧠 Skills</h3>
        <ul className="skills-list">
          <li>Friendly, positive attitude</li>
          <li>Teamwork and collaboration</li>
          <li>Problem-solving</li>
          <li>JavaScript</li>
          <li>HTML and CSS skills</li>
          <li>Java</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </section>

      {/* === Hobbies === */}
      <section className="section hobbies">
        <h3>🎨 Hobbies and Interests</h3>
        <ul>
          <li>Reading books</li>
          <li>Drawing</li>
          <li>Fashion designing</li>
        </ul>
      </section>

      {/* === Resume Download === */}
      <section className="section download">
        <h3>📄 Download Resume</h3>
        <a href="/resume.pdf" download className="download-btn">
          Download PDF
        </a>
      </section>
    </div>
  );
};

export default Resume;
