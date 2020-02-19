import React from 'react'
import './WebSite.styles.scss'

import {Switch , Route} from 'react-router-dom';
// import {Transition , CSSTransition} from 'react-transition-group';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/home-page/home-page.component';
import Competencies from './pages/competencies-page/competencies.component'
import PortfolioPage from './pages/portfolio-page/portfolio-page.component';
// import ContactPage from './pages/contact-page/contact-page.component';



class WebSite extends React.Component {
  render(){
    return (
      <div className="website">
        <NavBar />
        <div id="route-container">
          <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/competencies' component={Competencies} />
            <Route path='/portfolio' component={PortfolioPage} />
            {/* <Route path='/contact' component={ContactPage} /> */}
          </Switch>
        </div>
      </div>
    )
  }
}


export default WebSite;