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

        <div className="bottom-port">
        All The Projects Listed Here Are Built By Kavian Darvish Under The Open Source Licenses. You May Use The Code As You Please. Enjoy.
        </div>
        <footer className='comp-footer'>
          Built By Dev Kavian<br/> 2020
        </footer>

    </div>
  )
}

export default PortfolioPage;