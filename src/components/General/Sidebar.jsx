import { useGlobalContext } from "../context";
import { socials, links } from "../data";
import { FaTimes } from "react-icons/fa";
import Ftl from '../../assets/forlife.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Sidebar.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
      <div className="sidebar-header">
        <img src={Ftl} alt="Logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}> {/* Use Link here */}
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
