
// Sidebar.jsx
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import Ftl from '../../assets/Frame 4.png';
import { NavLink } from 'react-router-dom'; // Changed to NavLink
import './Sidebar.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar-header">
        <img src={Ftl} alt="For The Life" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/event" 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/gallery" 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      
      <ul className="social-links">
        <li><a href="#" target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">TIKTOK</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">YOUTUBE</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;