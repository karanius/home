import React from 'react';
import './portfolio-page.styles.scss'

import CardGenerator from '../../components/card-generator/card-generator.component';

const PortfolioPage = () => {
  return(
    <div className="port-container">

      <div className="top-title-port">
        <p className="top-title-msg-port">
          PORTFOLIO
        </p>
      </div>

        <div className="clip-background-color">
          <div className="path-clip-border">
            <div className="path-clip"></div>
          </div>
        </div>

          <CardGenerator/>

        <div className="clip-background-color-two">
          <div className="path-clip-border-two">
            <div className="path-clip-two"></div>
          </div>
        </div>

        <div className="bottom-port"></div>

    </div>
  )
}

export default PortfolioPage;