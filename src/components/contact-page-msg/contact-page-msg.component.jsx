
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

        <div tabIndex="0" className='msg-title'>
          Connect with me
        </div>

        <div tabIndex="0" className="msg-itself">
          I spend the majority of my time learning and building new things, so I am always in need of new projects! Feel free to connect with me by clicking on the channels below!
        </div>

        <div className="contact-links" >

          {window.innerWidth <= 325 ? null :
          (
            <div className="left-side" >
              <span className="click-on-text" >CLICK ON</span> <span className='bracket' >{`{`}</span>
            </div>
          )
           }

          <div className="right-side">

          { 
          window.innerWidth <= 325 ? 
            <span className="click-on-text" >CLICK ON:</span> 
          : null 
           }



            <span className='items email'> 
              <img src={emailSVG} className="side-img" alt="letter" />
              <input className="emailAdress" tabIndex="0" aria-label="This is my email adress: kavian1991@gmail.com" value="kavian1991@gmail.com" readOnly />
            </span>
            
            <span className="items">
              <a className="links" tabIndex="0" aria-label="my linkedin account" href="https://www.linkedin.com/in/kavian-darvish">
                <img tabIndex="-1" className='side-img' alt='linkedin' src={LinkedInSvg} />
                <p>Linkedin</p>
              </a>
            </span>

            <span className="items">
              <a className="links" tabIndex="0" aria-label="my github code repository" href="https://github.com/karanius">
                <img tabIndex="-1" className='side-img lin' alt='github' src={GithubSVG} />
                <p>Github</p>
              </a>
            </span>

            <span className="items">
              <a className="links" tabIndex="0" aria-label="my resume in pdf format" href={resumePDF}>
                <img tabIndex="-1" className='side-img lin' alt='resume' src={ResumeSVG} />
                  <p>Resume</p>
              </a>                  
            </span>
          </div>
         

        </div>
      
      </div>


    </div>
  )
}

export default ContactPageMsg;