import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ricardo Leon</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ricardo.leon.37"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/ricardo-leon-hinojosa-2856571b0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ricardoleonh" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/frontenddoctor" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/ricardoleonh1" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ricardo Leon</small>
      </div>
    </footer>
  )
}

export default Footer