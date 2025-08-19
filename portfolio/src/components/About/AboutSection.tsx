import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import './css/AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-services">
        <div className="vertical-line">
          <div className="dot top"></div>
          <div className="line"></div>
          <div className="dot middleOne"></div>
          <div className="line"></div>
          <div className="dot middleTwo"></div>
          <div className="line"></div>
          <div className="dot middleThree"></div>
          <div className="line"></div>
          <div className="dot bottom,"></div>
        </div>
        <div className="service-list">
          <div className="service-item">
            <FaCode className="service-icon" />
            <span>Website Development</span>
          </div>
          <div className="service-item">
            <FaMobileAlt className="service-icon" />
            <span>App Development</span>
          </div>
          <div className="service-item">
            <FaServer className="service-icon" />
            <span>Website Hosting</span>
          </div>
           <div className="service-item">
            <FaServer className="service-icon" />
            <span>Backend Development</span>
          </div>
        </div>
      </div>
      <div className="about-info">
        <h2>About me</h2>
        <p>
           I began my career as a hardware-software co-designer, working with FPGAs and IoT systems, where I discovered my passion for building solutions from scratch. After earning my PhD, I transitioned into full-time software engineering, specializing in full-stack development (MERN) and end-to-end SDLC. With 14+ years of experience across Defence, Banking, and Energy sectors, I thrive in creating secure, scalable systems using modern tools like Kubernetes, Docker, and AWS
        </p>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-num">50 <span className="plus">+</span></span>
            <span className="stat-label">Completed<br />Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">94 <span className="plus">%</span></span>
            <span className="stat-label">Client<br />satisfaction</span>
          </div>
          <div className="stat">
            <span className="stat-num">14 <span className="plus">+</span></span>
            <span className="stat-label">Years of<br />experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}