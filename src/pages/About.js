import React from 'react';
import Header from '../components/Header';
import './About.css';
import logo from '../assets/logo.png';

function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="about-main">
          <div className="about-container">
            <div className="about-header">
              <img src={logo} alt="Oracle Logo" className="about-logo" />
              <h1 className="about-title">Oracle</h1>
            </div>
            <div className="about-content">
              <p className="contact-info">
                <strong>Телефон:</strong> 8 (916) 475-59-74
              </p>
              <p className="contact-info">
                <strong>e-mail:</strong> developer@oracle.ligma
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default About;
