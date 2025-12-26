import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="home-main">
          <div className="hero-section">
            <div className="platform-badge">LMS-платформа</div>
            <h1 className="hero-title">
              <span className="title-colored">Обучение</span> без границ
            </h1>
            <h2 className="hero-subtitle">Управляйте своим обучением</h2>
            <p className="hero-description">
              LMS (Learning Management System) — это платформа<br />
              для управления обучением, позволяещая создавать,<br />
              проводить и контролировать онлайн-курсы.
            </p>
            <button 
              className="catalog-btn"
              onClick={() => navigate('/catalog')}
            >
              Перейти к катологу курсов
            </button>
            <p className="login-link">
              Уже зарегистрированы?<br />
              <span onClick={() => navigate('/login')} className="link">
                Войдите в личный кабинет.
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
