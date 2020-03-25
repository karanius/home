import React,{useEffect , useState} from 'react'
import './WebSite.styles.scss'

import {Switch , Route } from 'react-router-dom';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/home-page/home-page.component';
import Competencies from './pages/competencies-page/competencies.component'
import PortfolioPage from './pages/portfolio-page/portfolio-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import AboutPage from './pages/about-page/about-page.component';
import NotFound from './pages/not-found-page/not-found.component';

const WebSite = () => {

  const [tothetopIsAvtive , setTothetopIsAvtive] = useState(null)

  useEffect(()=>{

    const measureTop = () =>{
      if((document.querySelector('#route-container').offsetHeight) > 1000){
        if ( (document.querySelector('#route-container').offsetHeight) <= (window.scrollY + window.innerHeight - 20) ){
          setTothetopIsAvtive('appear')
        } else if ((document.querySelector('#route-container').offsetHeight - 200) >= (window.scrollY + window.innerHeight - 20)) {
          setTothetopIsAvtive(null)
        } else if ((window.scrollY === 0)){
          setTothetopIsAvtive(null)
        }
      }
    }

    const url = 'https://devkavianbackend.herokuapp.com/';
    fetch(url)
    .then(()=>{
      console.log('server is up')
    })
    .catch(()=>{
      console.log('server is down')
    })

    window.addEventListener('scroll', measureTop)

    return ()=>{
      window.addEventListener('scroll', measureTop)
    }

  },[])

  const goToTop = () =>{
    window.scrollTo({
      top: 0 ,
      behavior:"smooth"
    })
  }

  return (
    <div className="website">
      <NavBar />
      <div id="route-container">
      <div className={`to-the-top ${tothetopIsAvtive}`} onClick={goToTop} ></div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/expertise' component={Competencies} />
          {/* <Route exact path='/portfolio' component={PortfolioPage} /> */}
          <Route exact path='/contact' component={ContactPage} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}


export default WebSite;