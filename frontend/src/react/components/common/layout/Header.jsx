import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <header>
      <div className="header_content">
        <Link to="/">
          <h1>David Projects</h1>
        </Link>
        <nav className="navigation">
          <ul className={`navigation_links ${toggleIcon ? "active" : ""}`}>
            <li>
              <Link to="/" className="navigation_links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="navigation_links">
                Espace client
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navigation_links">
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu_hamburger" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
