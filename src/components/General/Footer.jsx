import './Footer.css'
import ftl from '../../assets/forlife.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (  
    <footer>
      <div className="footer-top">
        <div className="footer-links">
        <div className="footer-logo">
          <Link to='/'>
          <img src={ftl} alt="For Life" />
          </Link>
        </div>
          <Link to='/about'>About</Link>
          <Link to='/event'>Events</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      <div className="footer-social">
        <a href="">X</a>
        <a href="">Tiktok</a>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
      </div>
      </div>
      <div className="footer-bottom">
        <h2>&copy;2024 4TL</h2>
      </div>
    </footer>
  );
};

export default Footer;
