import { Link } from "react-router-dom";
import forlife from "../../assets/Frame 4.png";
import hamburger from "../../assets/hamburger.png";
import { useGlobalContext } from "../context";
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <nav className={`navbar ${isSidebarOpen ? 'navbar-hidden' : ''}`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to='/'>
          <img src={forlife} alt="forlife" className="logo" />
        </Link>
      </div>
      {/* Hamburger Button Section */}
      <div className="navbar-hamburger">
        <button onClick={openSidebar} className="hamburger-button">
          <img src={hamburger} alt="hamburger" className="hamburger-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
