import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration:', formData);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="register-main">
          <div className="register-container">
            <h1 className="register-title">Регистрация</h1>
            <form className="register-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Логин или адрес эл. почты"
                className="register-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="password"
                placeholder="Пароль"
                className="register-input"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <input
                type="password"
                placeholder="Подтвердите пароль"
                className="register-input"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
              <button type="submit" className="register-btn">
                Зарегистрироваться
              </button>
            </form>
            <p className="register-footer">
              Уже зарегистрированы?{' '}
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

export default Register;
