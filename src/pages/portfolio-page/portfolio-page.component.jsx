import React from 'react';
import './portfolio-page.styles.scss'

import TopMargin from '../../components/top-margin/top-margin-component';
import BottomMargin from '../../components//bottom-margin//bottom-marign.components';
import CardGenerator from '../../components/card-generator/card-generator.component';
import Footer from '../../components/footer/footer.component';

const PortfolioPage = () => {
  return(
    <div className="port-container">
      <TopMargin >
        PORTFOLIO
      </TopMargin>

      <CardGenerator/>

      <BottomMargin>
        All the projects listed here are built by <a className='link-port' href='https://github.com/karanius'>Kavian Darvish</a> under the open source licenses. You may use the code as you please. Enjoy.
      </BottomMargin>
      
      <Footer />
    </div>
  )
}

export default PortfolioPage;