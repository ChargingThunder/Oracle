import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="login-main">
          <div className="login-container">
            <h1 className="login-title">Авторизация</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Логин или адрес эл. почты"
                className="login-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="password"
                placeholder="Пароль"
                className="login-input"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button type="submit" className="login-btn">
                Войти
              </button>
            </form>
            <p className="login-footer">
              Ещё нет личного кабинета?{' '}
              <span onClick={() => navigate('/register')} className="link">
                Зарегистрируйтесь.
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
