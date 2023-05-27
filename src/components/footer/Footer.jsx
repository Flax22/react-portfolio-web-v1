import React from 'react'
import './footer.css'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FLAX22 - LE DINH </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jjindin22" target='_blank'><BsFacebook /></a>
        <a href="https://github.com/Flax22" target='_blank'><BsGithub /></a>
        <a href="https://www.linkedin.com/in/%C4%91%E1%BB%8Bnh-l%C3%AA-tr%C3%AD-b75413240/" target='_blank' ><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; _Jjindin XCode. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer