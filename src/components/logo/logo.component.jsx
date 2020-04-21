import React from 'react';
import './logo.styles.scss'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {openCloseDropNav} from '../../redux/nav-bar/nav-bar.actions'

// import FireWorks from '../fire-works/fire-works.component';

class Logo extends React.Component {

  componentDidMount(){
    // document.querySelector('.nav-logo').addEventListener('click',this.fireWorks)

    document.querySelectorAll('.nav-logo').forEach(elem=>{
      elem.addEventListener('click', this.close)
    })
  }

  componentWillUnmount(){
    document.querySelectorAll('.nav-logo').forEach(elem=>{
      elem.removeEventListener('click', this.close)
    })
    // document.querySelector('.nav-logo').removeEventListener('click',this.fireWorks)
  }

  close = () => {
    this.props.openCloseDropNav(false);
  }

  // fireWorks = (e)=>{
  //   const {clientX, clientY} = (e);
  //   console.log(clientX,clientY)

  // }

  render(){
    return (
      <Link tabIndex="0" aria-label="Home" className="nav-logo" to='/'>
        <span  className='first-letter'>DEV KAVIAN</span> 
      </Link>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    openCloseDropNav: state => dispatch(openCloseDropNav(state))
  }
}


export default connect(null,mapDispatchToProps)(Logo);