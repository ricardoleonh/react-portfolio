import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Microsoft Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>A. Directory</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>O365</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Sharepoint</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>MFA-Intune</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of Microsoft*/} 

        <div className="experience__frontend">
          <h3>Security and RMM</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Cisco VPN</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Barracuda</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Kaseya</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>ConnectWise</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of Security*/} 

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
          {/* END of FRONTEND*/} 


        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
                <div>
                  <h4>PowerShell</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>PhP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of BAckEND*/} 
      </div>
    </section>
  )
}

export default Experience