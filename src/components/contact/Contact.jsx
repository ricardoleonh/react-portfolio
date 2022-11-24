import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3bwp93l', 'template_avefgss', form.current, 'X2IHqt-NjAPPUN2Mx')
    
    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMailOpen className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ricardoleon.h05@gmail.com</h5>
            <a href="mailto:ricardoleon.gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Cado Leon</h5>
            <a href="https://m.me/ricardo.leon.37" target="_blank">Send a FB Message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+3125237652</h5>
            <a href="https://api.whatsapp.com/send?phone=13125237652" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder=' Your Email' required/>
          <textarea name="message" rows="15" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact