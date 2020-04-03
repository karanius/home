import React from 'react';
import './nav-links.styles.scss'
import {Link } from 'react-router-dom';


class NavLinks extends React.Component {

  render(){
    return (
      <div className="nav-items" >
        <Link className="nav-link" to='/about'>ABOUT</Link>

        <Link className="nav-link" to='/expertise'>EXPERTISE</Link>

        <Link className="nav-link" to='/portfolio'>PORTFOLIO</Link>

        <Link className="nav-link" to='/contact'>CONTACT</Link>
      </div>
    )
  }
}



export default NavLinks;