import './Logo.css';
import creativeIdeasLogo from '../../../src/assets/creative-ideas-logo.png'

const Logo = () => (
    <div className='logo-container'>
        <img src={creativeIdeasLogo} alt="Create Ideas Logo" className="logo-img" />
    </div>
);

export default Logo;