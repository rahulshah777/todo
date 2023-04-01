//import necessary library
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

//function to return navbar
function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Todo App</Link>

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

//export navbar
export default NavBar;
