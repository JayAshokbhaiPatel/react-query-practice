import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../constant";

function Navbar() {
  return (
    <header>
      <nav aria-label="primary-nav">
        <div className="nav">
          <div className="nav__logocontainer">
            <Link to="/" className="nav__link">
              Logo
            </Link>
          </div>

          <ul className="nav__list" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="nav__li">
                <Link to={link.path} className="nav__link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
