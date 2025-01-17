/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './AboutAccordion.css';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import accordions from './accordion';

const AboutAccordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className='About-group'>
      <div className='About-contact'>
        <h1>QUESTIONS WE'VE ANSWERED</h1>
        <h2>
          IF YOU CAN'T FIND THE ANSWERS YOU'RE <br /> LOOKING FOR, TRY CONTACTING US
        </h2>
        <button className='ftl-button'>CONTACT US</button>
      </div>
      <div className='accordion-container'>
        {accordions.map((accordion) => {
          const { id, text, paragraph } = accordion;
          const isActive = id === activeId; // Determine if this question is active
          return (
            <div key={id} className='accordion-item'>
              <div className='accordion-header'>
                <h3>{text}</h3>
                <button className='question-btn' onClick={() => toggleQuestion(id)}>
                  {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              <p
                className={`accordion-content ${isActive ? 'active' : ''}`}
              >
                {paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutAccordion;
