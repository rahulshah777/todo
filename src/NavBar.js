//import React and necessary components from react-router-dom and the CSS file for this component
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

// define the functional component NavBar
function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/todo" className="navbar-logo">Todo App</Link>

      <ul className="navbar-links">
        <li>
          <Link to="/todo-list" className="navbar-link" onClick={() => navigate('/todo-list')}>
            Todo List
          </Link>
        </li>
        <li>
          <Link to="/contact-form" className="navbar-link" onClick={() => navigate('/contact-form')}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
// export the NavBar component so it can be used in other parts of the application
export default NavBar;
