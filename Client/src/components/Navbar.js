import React from 'react';
import '../styles/NavbarStyles.css'
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return (
      <header className="header">
      <nav className="orange darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a href="/home" className="brand-logo">Neha's Portfolio</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/about'> About</Link>
            </li>
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/portfolio'> Portfolio </Link>
            </li>
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/contact'> Contact</Link>
            </li>
            <li>
              <Link className="btn btn-lg waves-light btn- m-2" to='/resume'> Resume </Link>
            </li>
          </ul>
            
        </div>
      </nav>


    </header>
  );
}

  
  export default Navbar