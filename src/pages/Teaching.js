import React, { useState } from 'react';
import Header from '../components/Header';
import './Teaching.css';

function Teaching() {
  const [view, setView] = useState('create'); // 'create' or 'addTask'
  const [courseName, setCourseName] = useState('');
  const [taskForm, setTaskForm] = useState({
    course: '',
    taskName: '',
    description: '',
    deadline: ''
  });

  const handleCreateCourse = (e) => {
    e.preventDefault();
    console.log('Creating course:', courseName);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log('Adding task:', taskForm);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="teaching-main">
          <div className="teaching-container">
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${view === 'create' ? 'active' : ''}`}
                onClick={() => setView('create')}
              >
                Создать курс
              </button>
              <button 
                className={`toggle-btn ${view === 'addTask' ? 'active' : ''}`}
                onClick={() => setView('addTask')}
              >
                Добавить задание
              </button>
            </div>

            {view === 'create' ? (
              <div className="form-container">
                <h1 className="form-title">Создание нового курса</h1>
                <form onSubmit={handleCreateCourse}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Название курса"
                      className="teaching-input"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      maxLength={64}
                    />
                    <span className="char-count">{courseName.length}/64</span>
                    <p className="input-hint">Максимум 64 символа</p>
                  </div>
                  <button type="submit" className="submit-btn">
                    Создать курс
                  </button>
                </form>
              </div>
            ) : (
              <div className="form-container">
                <h1 className="form-title">Добавить задание по курсу</h1>
                <form onSubmit={handleAddTask}>
                  <select 
                    className="teaching-select"
                    value={taskForm.course}
                    onChange={(e) => setTaskForm({...taskForm, course: e.target.value})}
                  >
                    <option value="">Выберите курс</option>
                    <option value="python">Python для начинающих</option>
                    <option value="react">React разработка</option>
                  </select>
                  
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Название задания"
                      className="teaching-input"
                      value={taskForm.taskName}
                      onChange={(e) => setTaskForm({...taskForm, taskName: e.target.value})}
                      maxLength={64}
                    />
                    <span className="char-count">{taskForm.taskName.length}/64</span>
                    <p className="input-hint">Максимум 64 символа</p>
                  </div>

                  <textarea
                    placeholder="Описание задания"
                    className="teaching-textarea"
                    value={taskForm.description}
                    onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
                    rows={6}
                  />

                  <label className="input-label">Срок сдачи</label>
                  <input
                    type="date"
                    className="teaching-input"
                    value={taskForm.deadline}
                    onChange={(e) => setTaskForm({...taskForm, deadline: e.target.value})}
                  />

                  <button type="submit" className="submit-btn">
                    Добавить
                  </button>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Teaching;
