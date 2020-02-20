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
        All the projects listed here are built by <a className='link-port' href='https://github.com/karanius'>Kavian Darvish</a> under the open source licenses. you may use the code as you please. Enjoy.
        </div>
        <footer className='comp-footer'>
          <b>Built By</b> &nbsp; <a className='link-footer' href='https://github.com/karanius'>Dev Kavian</a> &nbsp; <span className="footer-year">2020</span>
        </footer>

    </div>
  )
}

export default PortfolioPage;