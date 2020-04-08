import React,{useEffect} from 'react';
import './portfolio-page.styles.scss'

import TopMargin from '../../components/top-margin/top-margin-component';
import BottomMargin from '../../components/bottom-margin/bottom-marign.components';
import Footer from '../../components/footer/footer.component';
import PortfolioSection from '../../components/portfolio-section/portfolio-section.component';


const PortfolioPage = () => {

  useEffect(()=>{
    window.onunload = function(){
      window.scrollTo({
        top:0
      })
    }
  },[])


  return(
    <div className="port-container">
      <TopMargin open={'open-other'} >
        PORTFOLIO
      </TopMargin>

      <PortfolioSection/> 

      <BottomMargin open={'open-other'}>
        <p>All the projects listed here are built by <a className='link-port' href='https://github.com/karanius'>Kavian Darvish</a> under open source licenses. You may use the code as you please. Enjoy.</p>
      </BottomMargin>
      
      <Footer />
    </div>
  )
}

export default PortfolioPage;