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
           Results-driven Senior Software Engineer with 15+ years of experience in designing, developing, and deploying scalable, secure, and cloud-native solutions across diverse industries, including banking, defense, energy, and medical biosensing platforms. Proficient in Java Spring Boot, ReactJS, and GraphQL, with extensive expertise in building microservices architectures, integrating OAuth2.0, OIDC, and JWT-based authentication mechanisms to ensure robust security. Skilled at leveraging AWS, Azure, and Kubernetes to deliver cloud-native deployments, optimize API Gateways, and automate CI/CD pipelines for high-performance, distributed systems. Adept in developing real-time data processing platforms, implementing observability solutions using Prometheus, Grafana, and Splunk, and ensuring compliance with strict regulatory frameworks such as CDR (Consumer Data Right) and ACCC standards. Experienced in working within regulated and air-gapped environments in defense and energy sectors, ensuring compliance with stringent security and operational requirements. Demonstrated ability to lead cross-functional teams, collaborating with product owners and architects to translate complex business requirements into innovative technical solutions. Delivered next-gen biosensing platforms utilizing OODA frameworks, MongoDB, and ReactJS-based frontends, enabling real-time insights and anomaly detection. Certified in AWS Developer Associate and Scrum Master, with a proven track record of enhancing system reliability, reducing unauthorized access risks by 60%-80%, and achieving 25% diagnostic accuracy improvement in critical systems. Over the last decade, have gained extensive experience in agile environments, actively participating in all agile ceremonies including sprint planning, daily standups, retrospectives, and backlog refinement to deliver iterative, high-quality solutions efficiently. Passionate about delivering cutting-edge solutions that align with business goals and drive operational excellence.
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