import React from 'react'
import './about.css'
import ME from '../../assets/me2-about.png'
import {FaAward} from 'react-icons/fa'
import {GiStairsGoal} from 'react-icons/gi'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8+ Years as Service Desk Engineer</small>
            </article>

            <article className='about__card'>
              <GiStairsGoal className='about__icon'/>
              <h5>Goals</h5>
              <small>Become a Software Developer</small>
            </article>

            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>GitHub</h5>
              <small>39 completed repos and projects</small>
            </article>
          </div>

          <p>Highly motivated bilingual service desk engineer with more than 8 years of experience in hardware, software, networking and other areas of support.Currently pursuing Azure certifications.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About