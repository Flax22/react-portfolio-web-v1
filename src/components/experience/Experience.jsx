import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>NodeJS <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Senior</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Experienced</small>s
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python <BsFillPatchCheckFill /></h4>
                <small className='text-light'>Senior</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience