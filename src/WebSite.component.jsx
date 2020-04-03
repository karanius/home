import React,{lazy,useEffect , useState, Suspense} from 'react'
import './WebSite.styles.scss'

import {BrowserRouter , Switch , Route } from 'react-router-dom';

// import loadable from '@loadable/component'
import Loadable from 'react-loadable';


// *** Non-Lazy section:

import NavBar from './components/nav-bar/nav-bar.component';
// import HomePage from './pages/home-page/home-page.component';
// import Competencies from './pages/competencies-page/competencies.component'
// import PortfolioPage from './pages/portfolio-page/portfolio-page.component';
// import ContactPage from './pages/contact-page/contact-page.component';
// import AboutPage from './pages/about-page/about-page.component';
// import NotFound from './pages/not-found-page/not-found.component';


// *****this is the lazy section

// const NavBar = lazy(() => import('./components/nav-bar/nav-bar.component'));
const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const Competencies = lazy(() => import('./pages/competencies-page/competencies.component'));
// const PortfolioPage = lazy(() => import('./pages/portfolio-page/portfolio-page.component'));
const ContactPage = lazy(() => import('./pages/contact-page/contact-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
const NotFound = lazy(() => import('./pages/not-found-page/not-found.component'));

const Loading = () => {
  return (
    <div className="loader-bg">
      <p className="loader-txt" >Downloading and loading assets</p>
      <div className="loader"></div>
    </div>
  )
}


// ********* this is the Lodable section
  const PortfolioPage = Loadable({
    loader: () => import('./pages/portfolio-page/portfolio-page.component'),
    loading: Loading,
  });




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
      <BrowserRouter  >
        <NavBar />
        <div id="route-container">
        <div className={`to-the-top ${tothetopIsAvtive}`} onClick={goToTop} ></div>
            <Suspense fallback={
              <div className="loader-bg">
                <p className="loader-txt" >Downloading and loading assets</p>
                <div className="loader"></div>
              </div>
            } >
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/expertise' component={Competencies} />
                <Route exact path='/portfolio' component={PortfolioPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route  component={NotFound} />
              </Switch>
            </Suspense>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default WebSite;