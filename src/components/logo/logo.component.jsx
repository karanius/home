import React from 'react';
import './logo.styles.scss'
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';
import {endCharAnimationComp} from '../../redux/animation/animation.action';
import {isBurgerOpen} from '../../redux/nav-bar/nav-bar.actions';


class Logo extends React.Component {


  
  componentDidMount(){
    const {endCharAnimationComp, isBurgerOpen} = this.props
    const logo = document.querySelector('.nav-logo');

    logo.addEventListener('mouseenter', e=>{
      this.fireworks('enter');
    })
    
    logo.addEventListener('mouseleave', e=>{
      this.fireworks('leave')
    })
    
    document.querySelector('.nav-logo').addEventListener('click',e=>{
        endCharAnimationComp(null)
        isBurgerOpen(null)
    })
  }

  fireworks = (msg) => {
    //fireworks code goes here
    console.log(msg)
  }

  render(){
    return (
      <Link className="nav-logo" to='/home'>
      DEV KAVIAN 
      </Link>
    )
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    endCharAnimationComp: state => dispatch(endCharAnimationComp(state)),
    isBurgerOpen: state => dispatch(isBurgerOpen(state))
  }
}

export default connect(null,mapDistpatchToProps)(Logo);