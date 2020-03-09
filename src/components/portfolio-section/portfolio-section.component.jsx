import React,{useEffect} from 'react';
import './portfolio-section.styles.scss'
import Button from '../button/button.component'

import CardGenerator from '../card-generator/card-generator.component';

const PortfolioSection = () => {


  useEffect(()=>{
    const scrollTo = () => {
      document.querySelector('.portfolio-container').scrollTop = 0;
      window.scrollTo({top:210, behavior:"smooth"})
    }

    document.querySelectorAll('.button').forEach(elem=>{
      elem.addEventListener('click',scrollTo)
    })

    return ()=>{
      document.querySelectorAll('.button').forEach(elem=>{
        elem.removeEventListener('click',scrollTo)
      })
    }
  },[])

  const handleClick = (e) => {
    document.querySelectorAll('.button').forEach(elem=>{
      if (elem.classList.contains('active')) {
        elem.classList.remove('active')
      }
    })
    e.target.classList.add('active');

    document.querySelectorAll('.portfolio-body').forEach(elem=>{
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      }
      if (elem.classList.contains(e.target.id)) {
        elem.classList.add('active')
      }
    })
  }


  return (
    <div className="portfolio-section">
        <div className="button-wrapper">
          <Button className="button active" hadnleFunc={handleClick} id="personal" name="PERSONAL PROJECTS" />
          <Button className="button" hadnleFunc={handleClick} id="bootcamp" name="BOOTCAMP PROJECTS" />
        </div>
        <div className="porfolio-body-wrapper">
          <div className="portfolio-container">
            <div className="portfolio-body personal active">
              <CardGenerator projects="personal" />
            </div>
            <div className="portfolio-body bootcamp">
              <CardGenerator projects="bootcamp" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default PortfolioSection;