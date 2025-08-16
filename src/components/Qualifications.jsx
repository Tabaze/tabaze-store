import React from 'react';
import { UilGraduationCap, UilSuitcase, UilCalendarAlt } from '@iconscout/react-unicons';

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section-title" data-heading="My Journey">Qualifications</h2>

      <div className="qualification-container container grid">
        <div className="education">
          <h3 className="qualification-title"><UilGraduationCap />Education</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">XYZ University (Sometown, NJ)</h3>
              <p className="timeline-text">BFA in Graphic Design</p>
              <span className="timeline-date"><UilCalendarAlt />2011 - 2013</span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">ABC University (Sometown. NJ)</h3>
              <p className="timeline-text">Diploma in Web Design</p>
              <span className="timeline-date"><UilCalendarAlt />2013 - 2015</span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">KLM University (Sometown, NJ)</h3>
              <p className="timeline-text">BS in Web Development</p>
              <span className="timeline-date"><UilCalendarAlt />2015 - 2017</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h3 className="qualification-title"><UilSuitcase />Experience</h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Copalopa Inc. (Sometown, NJ)</h3>
              <p className="timeline-text">Lead / Senior UX Designer</p>
              <span className="timeline-date"><UilCalendarAlt />2018 - Present</span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Gabogle Inc. (Somwtown, NJ)</h3>
              <p className="timeline-text">Web site / UX Designer</p>
              <span className="timeline-date"><UilCalendarAlt />2015 - 2018</span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Copalopa Inc. (Sometown, NJ)</h3>
              <p className="timeline-text">Junior UX Designer</p>
              <span className="timeline-date"><UilCalendarAlt />2013 - 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;