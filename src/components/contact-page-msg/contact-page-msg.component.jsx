import React from 'react';
import './contact-page-msg.style.scss'
import LinkedInSvg from '../../animations/svgs/linkedin.svg'
import GithubSVG from '../../animations/svgs/github.svg'
import ResumeSVG from '../../animations/svgs/resume.svg'
import resumePDF from '../../assets/kd2020.pdf';

const ContactPageMsg = ({copiedToClipboard}) => {
  return(
    <div className='msg-wrapper'>
          
    <div className={`copied ${copiedToClipboard ? "clicked" : null}`}>
      copied <br/> to <br/> clipboard
    </div>
    <div className='msg-container'>
      <h3 tabindex="0" className='msg-title'>
        Connect with me
      </h3>
      <p tabindex="0" className="msg-itself">
        I spend the majority of my time learning and building new things, so I am always in need of new projects! Feel free to connect with me by clicking on the channels below!
      </p>
      <span className='email'><i  className="far fa-envelope"></i><input tabindex="0" className="emailAdress" value="kavian1991@gmail.com" readOnly /></span>
      <div className='logos-cont'>
        <span> 
          <a tabindex="0" targer="_blank" href="https://www.linkedin.com/in/kavian-darvish-10ba36181/"><img  className='link-svg ' alt='linkedin' src={LinkedInSvg} /></a>
          <a tabindex="0" href="https://github.com/karanius"><img className='link-svg lin' alt='github' src={GithubSVG} /></a>
          <a tabindex="0" href={resumePDF}><img className='link-svg lin' alt='resume' src={ResumeSVG} /></a>                  
        </span>
      </div>
    </div>
  </div>
  )
}

export default ContactPageMsg;