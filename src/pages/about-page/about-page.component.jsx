import React,{useEffect} from 'react';
import './about-page.styles.scss'

import TopMargin from '../../components/top-margin/top-margin-component';
import BottomMargin from '../../components//bottom-margin//bottom-marign.components';
import Footer from '../../components/footer/footer.component';


const AboutPage = () => {

  useEffect(()=>{
    const img = document.createElement("img");
    img.src = require("../../assets/devkavian.jpeg");
    img.alt = 'Kavian'
    img.className = "kavian-img"
    img.tabIndex = "-1"
    document.querySelector('.image-wrapper-abt').appendChild(
      img
    ) 
  },[])

  return(
    <div>
      <TopMargin 
      open={'open-other'} 
      intro="about-me"
      >
        ABOUT ME
      </TopMargin>


      <div className="mid-body" >
        
        <div className="image-wrapper image-wrapper-abt">
          
        </div>

 

        <div className="msg-wrapper">

          <div className="msg-title">My Journey</div>

          <div className="msg-body">
            
            <p className="p-of-msgs" >
              I love to challenge myself, and to learn new things. No matter how much knowledge I may have.. I just love to learn more.
            </p>
          
            <p className="p-of-msgs" >
              Currently in Toronto - Working as a freelance web developer. Can't wait to work with other Full-Stack, Front-End or Back-End enginners. 
            </p>

            <p className="p-of-msgs" >
              I was 5 years old when I started using a PC at home: Windows 95. I was obsessed. At the same time in our classes in middle school, they were teaching us "Logo" (<a href="https://en.wikipedia.org/wiki/Logo_(programming_language)">programming language</a>). And this is how I formed a special bond with electronics, computer programs and internet. 
            </p>
            <p className="p-of-msgs" >
              For my real first attempt at coding: I tought myself python and wrote a program to recieve and auto-responsd to mass amounts of sms messages using a LTE SIM Dongle. 
            </p>
            <p className="p-of-msgs" >
              I've been teaching myself how to code ever sense. Finally, in order to fill my knowledge gap, I decided to take the Full-Stack Web Development Bootcamp course at Uinversity of Toronto. 
            </p>

            <p className="p-of-msgs" >
              Arts and science. A combo I can not get enough of. I have a Digital Film degree from Center for Arts and Technology (da Vinci School). Years of experience in digital arts, specially photo manipulation and coding has given me the creative skill set needed for this industry.
            </p>

          </div>

        </div>

      </div>


      <BottomMargin open={'open-other'} />
      <Footer/>
    </div>
  )
}

export default AboutPage;