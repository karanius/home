import React from 'react';
import './nav-links.styles.scss'
import {Link, withRouter } from 'react-router-dom';

class NavLinks extends React.Component {

  componentDidMount(){
    // console.log(this.props)
  }

  render(){
    return (
      <div className="nav-items" >
        <Link className="nav-link" 
        to='/expertise'
        >EXPERTISE</Link>

        <Link className="nav-link" 
        onClick={()=>{this.props.history.push('/portfolio')}}
        to='/portfolio'
        >PORTFOLIO</Link>

        <Link className="nav-link" to='/contact'>CONTACT</Link>
      </div>
    )
  }
}



export default withRouter(NavLinks);