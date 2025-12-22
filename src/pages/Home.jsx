import React, { useState } from 'react';
import { SocialLinks } from "../index";
import ProfileImg from "../assets/profile.png";

const Home = () => {
  const [hoveredHire, setHoveredHire] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState(false);

  return (
    <>
      <div
        id="home"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",
          display: "flex",
          alignItems: "center",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <div className="home-grid">

            {/* LEFT */}
            <div className="left-content">
              <div className="hello-row">
                <span className="hello-text">Hello, I'm</span>
                <div className="name-badge">
                  <span className="name_title">Nancy</span>
                </div>
                <span className="wave">👋</span>
              </div>

              <h1 className="main-title">Nancy Kumari</h1>
              <h2 className="sub-title">Software Developer | Backend Engineer</h2>

              <div className="exp-badge">
                <span>🚀</span>
                <span className="exp-text">4 Years Experience</span>
              </div>

<div className="btn-row">
  <button
    onMouseEnter={() => setHoveredHire(true)}
    onMouseLeave={() => setHoveredHire(false)}
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="hire-btn"
    style={{ transform: hoveredHire ? "scale(1.1)" : "scale(1)" }}
  >
    Hire Me Now
  </button>
  <button
    onMouseEnter={() => setHoveredArrow(true)}
    onMouseLeave={() => setHoveredArrow(false)}
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="arrow-btn"
    style={{ transform: hoveredArrow ? "scale(1.1) rotate(45deg)" : "scale(1)" }}
  >
    ↗️
  </button>
</div>

              <SocialLinks />
            </div>

            {/* RIGHT */}
            <div className="right-content">
              <div className="circle"></div>
              <div className="profile-wrapper">
                <img src={ProfileImg} alt="Profile" className="profile-img" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>
        {`
          .home-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .left-content {
            animation: fadeIn 0.8s ease-out;
          }

          .hello-row {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-wrap: wrap;
          }

          .hello-text {
            font-size: 2rem;
            font-weight: 600;
            background: linear-gradient(90deg, #6b7280, #3b82f6, #6b7280);
            background-size: 200% auto;
            -webkit-background-clip: text;
            color: transparent;
            animation: textGradient 3s infinite;
          }

          .name-badge {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            padding: 0.5rem 1.5rem;
            border-radius: 12px;
            color: white;
            font-weight: 700;
          }

          .wave { font-size: 1.7rem; animation: wave 2s infinite; }
          .main-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700; color: #111827; margin-top: 1rem; }
          .sub-title { font-size: 1.4rem; color: #6b7280; font-weight: 500; margin-top: 0.5rem; }

          .exp-badge {
            margin-top: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.7rem;
            border: 2px solid #3b82f6;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            background: #eff6ff;
          }

          .btn-row {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 2rem;
          }

          .hire-btn {
            background: #3b82f6;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 50px;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: 0.3s ease;
          }

          .arrow-btn {
            width: 56px;
            height: 56px;
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            border: none;
            font-size: 1.4rem;
            cursor: pointer;
            transition: 0.3s ease;
          }

          /* RIGHT */
          .right-content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .circle {
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: linear-gradient(135deg, #dbeafe, #e9d5ff);
            position: absolute;
            animation: rotate 20s linear infinite;
          }

          .profile-wrapper {
            width: 330px;
            height: 330px;
            border-radius: 50%;
            overflow: hidden;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* RESPONSIVE */
          @media (max-width: 1024px) {
            .home-grid { grid-template-columns: 1fr; text-align: center; }
            .btn-row { justify-content: center; }
            .circle { width: 360px; height: 360px; }
            .profile-wrapper { width: 260px; height: 260px; }
          }

          @media (max-width: 768px) {
            .circle { width: 280px; height: 280px; }
            .profile-wrapper { width: 220px; height: 220px; }
          }

          @media (max-width: 480px) {
            .main-title { font-size: 2.2rem; }
            .hello-text { font-size: 1.4rem; }
          }

          /* Animations */
          @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes wave {
            0%,100%{transform:rotate(0deg);}
            10%,30%{transform:rotate(14deg);}
            20%,50%{transform:rotate(-8deg);}
            40%,60%{transform:rotate(14deg);}
            70%{transform:rotate(0deg);}
          }
        `}
      </style>
    </>
  );
};

export default Home;
