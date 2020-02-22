import React, {useState,useEffect} from 'react';
import './drop-nav.styles.scss';

import {Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {openCloseDropNav} from '../../redux/nav-bar/nav-bar.actions'

const DropNav = ({dropNavIsOpen,openCloseDropNav}) => {
  const [engineIsRunning,setEngineIsRunning] = useState(false);

  useEffect(()=>{
    const close = () => {
      openCloseDropNav(false);
    }
  
    document.querySelectorAll('.nav-link').forEach(elem=>{
      elem.addEventListener('click', close)
    })
  
  
    return ()=>{
      document.querySelectorAll('.nav-link').forEach(elem=>{
        elem.removeEventListener('click', close)
      })
    }
  },[])


  if(!engineIsRunning && document.querySelector('.drop-nav') ){
    setEngineIsRunning(true);
    const dropNavElem = document.querySelector('.drop-nav');
    let requestAnimId;
    if (dropNavIsOpen) {
      const open = (timestamp) => {
        if ( dropNavElem.offsetTop <= 30) {
          dropNavElem.style.top = ((dropNavElem.offsetTop + 2) + 'px');
          requestAnimationFrame(open)
        } else {
          document.querySelectorAll('.nav-link').forEach(elem=>{
            elem.setAttribute("tabIndex","0")
          })
          cancelAnimationFrame(requestAnimId);
          setEngineIsRunning(false);
        }
      }
      requestAnimId = requestAnimationFrame(open)
  } else {
      const close = (timestamp) => {
        if ( dropNavElem.offsetTop >= 0) {
          dropNavElem.style.top = ((dropNavElem.offsetTop - 2) + 'px');
          requestAnimationFrame(close)
        } else {
          document.querySelectorAll('.nav-link').forEach(elem=>{
            elem.setAttribute("tabIndex","-1")
          })
          cancelAnimationFrame(requestAnimId);
          setEngineIsRunning(false);
        }
      }
      requestAnimId = requestAnimationFrame(close)
  }
}

  return(
    <div className="drop-nav" >
      <Link tabIndex="-1" className="nav-link" to='/competencies'>COMPETENCIES</Link>
      <span>|</span>
      <Link tabIndex="-1" className="nav-link" to='/portfolio'>PORTFOLIO</Link>
      <span>|</span>
      <Link tabIndex="-1" className="nav-link" to='/contact'>CONTACT</Link>
    </div>
  )

}

const mapStateToProps = ({navBar}) => {
  return {
    dropNavIsOpen: navBar.dropNavIsOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openCloseDropNav: state => dispatch(openCloseDropNav(state))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropNav);