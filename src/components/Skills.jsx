import React, { useState } from 'react';
import { 
  UilBracketsCurly, 
  UilSwatchbook, 
  UilServerNetwork, 
  UilAngleDown 
} from '@iconscout/react-unicons';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">My Experience</h2>

      <div className="skills-container container grid">
        <div className="skills-tabs">
          <div 
            className={`skills-header ${activeTab === 'frontend' ? 'skills-active' : ''}`} 
            onClick={() => handleTabClick('frontend')}
            data-target="#frontend"
          >
            <UilBracketsCurly className="skills-icon" />
            <div>
              <h1 className="skills-title">Frontend Developer</h1>
              <span className="skills-subtitle">More than 4 years</span>
            </div>
            <UilAngleDown className="skills-arrow" />
          </div>

          <div 
            className={`skills-header ${activeTab === 'design' ? 'skills-active' : ''}`} 
            onClick={() => handleTabClick('design')}
            data-target="#design"
          >
            <UilSwatchbook className="skills-icon" />
            <div>
              <h1 className="skills-title">UI / UX Design</h1>
              <span className="skills-subtitle">More than 5 years</span>
            </div>
            <UilAngleDown className="skills-arrow" />
          </div>

          <div 
            className={`skills-header ${activeTab === 'backend' ? 'skills-active' : ''}`} 
            onClick={() => handleTabClick('backend')}
            data-target="#backend"
          >
            <UilServerNetwork className="skills-icon" />
            <div>
              <h1 className="skills-title">Backend Developer</h1>
              <span className="skills-subtitle">More than 2 years</span>
            </div>
            <UilAngleDown className="skills-arrow" />
          </div>
        </div>

        <div className="skills-content">
          {activeTab === 'frontend' && (
            <div className="skills-group skills-active" data-content id="frontend">
              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">HTML</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '90%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">CSS</h3>
                    <span className="skills-number">80%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">Javascript</h3>
                    <span className="skills-number">60%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '60%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">React</h3>
                    <span className="skills-number">85%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '85%' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="skills-group" data-content id="design">
              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">Figma</h3>
                    <span className="skills-number">90%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '90%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">Sketch</h3>
                    <span className="skills-number">80%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">PhotoShop</h3>
                    <span className="skills-number">70%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '70%' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="skills-group" data-content id="backend">
              <div className="skills-list grid">
                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">PHP</h3>
                    <span className="skills-number">80%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">Python</h3>
                    <span className="skills-number">80%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '80%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">MySQL</h3>
                    <span className="skills-number">70%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '70%' }}></span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-titles">
                    <h3 className="skills-name">Firebase</h3>
                    <span className="skills-number">75%</span>
                  </div>
                  <div className="skills-bar">
                    <span className="skills-percentage" style={{ width: '75%' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;