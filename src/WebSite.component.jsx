import React,{useEffect , useState} from 'react'
import './WebSite.styles.scss'

import {Switch , Route } from 'react-router-dom';
// import {Transition , CSSTransition} from 'react-transition-group';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/home-page/home-page.component';
import Competencies from './pages/competencies-page/competencies.component'
import PortfolioPage from './pages/portfolio-page/portfolio-page.component';
import ContactPage from './pages/contact-page/contact-page.component';

const WebSite = () => {

  const [tothetopIsAvtive , setTothetopIsAvtive] = useState(null)

  useEffect(()=>{

    const measureTop = () =>{
      if (window.scrollY > 265){
        setTothetopIsAvtive('appear')
      } else {
        setTothetopIsAvtive(null)
      }
    }

    const url = 'https://devkavianbackend.herokuapp.com/';
    fetch(url)
    .then(res=>{
      console.log('server is up')
    })
    .catch(err=>{
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
          <Route exact path='/expertise' component={Competencies} />
          <Route exact path='/portfolio' component={PortfolioPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </div>
    </div>
  )
}


export default WebSite;