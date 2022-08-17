import React, { useRef } from 'react'
import './contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { BsMessenger, BsInstagram } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phmuv6h', 'template_3w7dgv5', form.current, 'UpzoPc8BHaNiZlNaG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>findxcode1125@gmail.com</h5>
            <a href="mailto:findxcode1125@gmail.com" target="_blank">Send Mail</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Định Lê</h5>
            <a href="https://m.me/100059112795031" target="_blank">Chat Now</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_Jjindin</h5>
            <a href="https://www.instagram.com/direct/t/_jjindin/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact