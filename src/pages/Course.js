import React, { useState } from 'react';
import Header from '../components/Header';
import './Course.css';

function Course() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="course-main">
          <div className="course-container">
            <h1 className="course-title">Python для начинающих</h1>
            <div className="lesson-card">
              <h2 className="lesson-title">Введение в Python. Задание 1.</h2>
              {completed ? (
                <div 
                  className="completed-badge"
                  onClick={() => setCompleted(false)}
                >
                  Пройдено
                </div>
              ) : (
                <button 
                  className="complete-btn"
                  onClick={() => setCompleted(true)}
                >
                  Отметить как пройденное
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Course;
