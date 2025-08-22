import './css/HeroSection.css';
import myPhoto from '../../assets/profile-photo.png'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <div className="hello-line">Hello.</div>
        <div className="name-line">I'm <span className="my-name">Nireekshan</span></div>
        <div className="role-line">Full Stack Developer</div>
        <div className='hero-buttons'>
            <Link to="/contact" className='btn btn-primary-rect' aria-label="Contact me for project collaboration">
              Gort a Project?
            </Link>
            <a 
              href="/resume.pdf" 
              download="Nireekshan_Sodavaram_Resume.pdf" 
              target="_blank" 
              rel="noopener" 
              className='btn btn-outline-rect' 
              aria-label="Download my resume in PDF format"
            >
              My Resume
            </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={myPhoto} alt="Nireekshan Sodavaram" />
      </div>
    </section>
  );
}