import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/29348.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <NavLink className='logo' to="/laptops">
          <img src={Logo} />
          <span className='title' >MONSTER</span>
        </NavLink>
        <nav className='header-content-nav'>
          <NavLink className='navLink-basket' to="/basket">
            <button>Basket</button>
          </NavLink>

          <NavLink className='navLink-login' to="/login">
            <button>Login</button>
          </NavLink>
          <ul>
            <li>
              <Link className='link' to="/laptops">Laptops</Link>
            </li>
            <li>
              <Link className='link' to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link className='link' to="/stores">Stores</Link>
            </li>
            <li>
              <Link className='link' to="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
      </div>
    </header>  
  );
};

export default Header;



      