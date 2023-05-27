import React from 'react'
import './nav.css'
import { AiTwotoneHome, AiOutlineUserSwitch } from 'react-icons/ai'
import { MdWork, MdMiscellaneousServices } from 'react-icons/md'
import { TiContacts } from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('# ')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUserSwitch /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a> */}
      <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav