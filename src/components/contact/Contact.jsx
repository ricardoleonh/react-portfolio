import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMailOpen />
            <h4>Email</h4>
            <h5>ricardoleon.h05@gmail.com</h5>
            <a href="mailto:ricardoleon.gmail.com">Send an Email</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact