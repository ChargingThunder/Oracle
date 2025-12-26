import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="Oracle Logo" className="logo-image" />
          <Link to="/" className="logo">Oracle</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">В начало</Link>
          <Link to="/catalog" className="nav-link">Каталог</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/teaching" className="nav-link">Преподавание</Link>
          <button 
            className="account-btn"
            onClick={() => navigate('/login')}
          >
            Личный кабинет
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
