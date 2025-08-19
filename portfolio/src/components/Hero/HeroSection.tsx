import './css/HeroSection.css';
import myPhoto from '../../assets/profile-photo.png'; // Replace with your real photo path

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <div className="hello-line">Hello.</div>
        <div className="name-line">I'm <span className="my-name">Nireekshan</span></div>
        <div className="role-line">Full Stack Developer</div>
        <div className='hero-buttons'>
            <a href='#contact' className='btn btn-primary-rect'>Gort a Project?</a>
            <a href='/resume.pdf' target='_blank' rel='noopener' className='btn btn-outline-rect'>My Resume</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={myPhoto} alt="Nireekshan Sodavaram" />
      </div>
    </section>
  );
}