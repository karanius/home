import React from 'react';
import './portfolio-section.styles.scss'
import Button from '../button/button.component'

import CardGenerator from '../card-generator/card-generator.component';

const PortfolioSection = ({children}) => {

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
          <Button className="button active" hadnleFunc={handleClick} id="personal" name="Personal Projects" />
          <Button className="button" hadnleFunc={handleClick} id="bootcamp" name="BootCamp Projects" />
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