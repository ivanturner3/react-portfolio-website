import React, { useState } from 'react';
import './skills.css';
import { BiCheck } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  const [frontEndVisible, setFrontEndVisible] = useState(false);
  const [backEndVisible, setBackEndVisible] = useState(false);
  const [universalSkillsVisible, setUniversalSkillsVisible] = useState(false);

  function toggleFrontEnd() {
    setFrontEndVisible(!frontEndVisible);
  }

  function toggleBackEnd() {
    setBackEndVisible(!backEndVisible);
  }

  function toggleUniversalSkills() {
    setUniversalSkillsVisible(!universalSkillsVisible);
  }

  return (
    <section id='skills'>
      <h5>Not just a pretty face</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <article className='skill'>
          <div className="skill__head" onClick={toggleFrontEnd}>
            <h3>Front End</h3>
            <h3>{frontEndVisible ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>

          {frontEndVisible && (
            <ul className={`skill__list ${frontEndVisible ? 'visible' : ''}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>HTML</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>CSS</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Javascript</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>React</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>JQuery</p>
              </li>
            </ul>
          )}
        </article>
        <article className='skill'>
          <div className="skill__head" onClick={toggleBackEnd}>
            <h3>Back End</h3>
            <h3>{backEndVisible ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>

          {backEndVisible && (
            <ul className={`skill__list ${backEndVisible ? 'visible' : ''}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Python</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Django</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>PostgreSQL</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>MySQL</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Node.js</p>
              </li>
            </ul>
          )}
        </article>
        <article className='skill'>
          <div className="skill__head" onClick={toggleUniversalSkills}>
            <h3>Universal Skills</h3>
            <h3>{universalSkillsVisible ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>

          {universalSkillsVisible && (
            <ul className={`skill__list ${universalSkillsVisible ? 'visible' : ''}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Automated Testing</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Git Version Control</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>APIs</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Cloud Computing</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Visual Studio Code</p>
              </li>
            </ul>
          )}
        </article>
      </div>
    </section>
  )
}

export default Skills