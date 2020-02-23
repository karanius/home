import React from 'react';
import './contact-page-msg.style.scss'
import LinkedInSvg from '../../animations/svgs/linkedin.svg'
import GithubSVG from '../../animations/svgs/github.svg'
import ResumeSVG from '../../animations/svgs/resume.svg'
import resumePDF from '../../assets/kd2020.pdf';

import emailSVG from '../../animations/svgs/email.svg'

const ContactPageMsg = ({copiedToClipboard}) => {
  return(
    <div className='msg-wrapper'>
          
    <div className={`copied ${copiedToClipboard ? "clicked" : null}`}>
      copied <br/> to <br/> clipboard
    </div>
    <div className='msg-container'>
      <h3 tabIndex="0" className='msg-title'>
        Connect with me
      </h3>
      <p tabIndex="0" className="msg-itself">
        I spend the majority of my time learning and building new things, so I am always in need of new projects! Feel free to connect with me by clicking on the channels below!
      </p>
      <span className='email'> <img src={emailSVG} className="email-img" alt="letter" /> <input tabIndex="0" aria-label="This is my email adress: kavian1991@gmail.com" className="emailAdress" value="kavian1991@gmail.com" readOnly /></span>
      <div className='logos-cont'>
        <span> 
          <a tabIndex="0" aria-label="my linkedin account" href="https://www.linkedin.com/in/kavian-darvish-10ba36181/"><img tabIndex="-1" className='link-svg ' alt='linkedin' src={LinkedInSvg} /></a>
          <a tabIndex="0" aria-label="my github code repository" href="https://github.com/karanius"><img tabIndex="-1" className='link-svg lin' alt='github' src={GithubSVG} /></a>
          <a tabIndex="0" aria-label="my resume in pdf format" href={resumePDF}><img tabIndex="-1" className='link-svg lin' alt='resume' src={ResumeSVG} /></a>                  
        </span>
      </div>
    </div>
  </div>
  )
}

export default ContactPageMsg;