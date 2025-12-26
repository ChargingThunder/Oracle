import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Catalog.css';

function Catalog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('it');

  const categories = [
    { id: 'it', name: 'Информационные технологии' },
    { id: 'languages', name: 'Иностранные языки' },
    { id: 'business', name: 'Бизнес и менеджмент' },
    { id: 'creative', name: 'Творчество и дизайн' },
    { id: 'personal', name: 'Личностный рост' },
    { id: 'school', name: 'Школьникам' },
    { id: 'pedagogy', name: 'Педагогика' },
    { id: 'architecture', name: 'Архитектура и инженерное дело' },
    { id: 'tech', name: 'Технологии и инновации' }
  ];

  const courses = {
    it: {
      title: 'Информационные технологии',
      sections: [
        {
          title: 'Языки программирования',
          items: ['Python', 'SQL', 'C/C++', 'Java', 'HTML/CSS']
        },
        {
          title: 'Фреймворки и библиотеки',
          items: ['Django', 'Pandas', 'React', 'FastAPI', 'Node.js']
        }
      ]
    },
    languages: {
      title: 'Иностранные языки',
      sections: [
        {
          title: '',
          items: ['Английский язык', 'Китайский язык', 'Немецкий язык', 'Французский язык', 'Корейский язык', 'Испанский язык', 'Итальянский язык', 'Турецкий язык', 'Японский язык', 'Арабский язык']
        }
      ]
    }
  };

  const currentCourses = courses[selectedCategory] || courses.it;

  return (
    <div className="page-container">
      <div className="page-content">
        <Header />
        <main className="catalog-main">
          <div className="catalog-container">
            <aside className="catalog-sidebar">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name} {cat.id === 'it' ? '' : '>'}
                </div>
              ))}
            </aside>
            <div className="catalog-content">
              <h1 className="catalog-title">{currentCourses.title}</h1>
              {currentCourses.sections.map((section, idx) => (
                <div key={idx} className="course-section">
                  {section.title && <h2 className="section-title">{section.title}</h2>}
                  <div className="course-list">
                    {section.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="course-item"
                        onClick={() => navigate('/course/1')}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Catalog;
