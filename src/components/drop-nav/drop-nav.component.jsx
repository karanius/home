import React from 'react';
import './drop-nav.styles.scss';


import {Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {setCharacterPositionLeft,endCharacterAnimation,endSpeechBubbleAnimation , endCharAnimationComp} from '../../redux/animation/animation.action';

class DropNav extends React.Component {

  componentDidMount(){
    const {setCharacterPositionLeft, endSpeechBubbleAnimation, endCharacterAnimation , endCharAnimationComp} = this.props;

    document.querySelectorAll('.nav-link').forEach(elem=>{
      elem.addEventListener('click',e=>{
        endSpeechBubbleAnimation(null)
        endCharacterAnimation(null)
        setCharacterPositionLeft(-50)
        endCharAnimationComp(null)
      })
    })
  }
  
  openClose = (state) => {
    if (state === null) {
      //close
      return 0
    } else if (state === true) {
      //open
      return 35
    }
  }

  render(){
    return(
      <div className="drop-nav" style={{top:`${this.openClose(this.props.burgerOpen)}px`}}>
        <Link className="nav-link" to='/competencies'>COMPETENCIES</Link>
        <span>|</span>
        <Link className="nav-link" to='/portfolio'>PORTFOLIO</Link>
        <span>|</span>
        <Link className="nav-link" to='/contact'>CONTACT</Link>
      </div>
    )
  }
}

const mapStateToProps = ({navBar}) => {
  return {
    burgerOpen: navBar.burgerOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    endSpeechBubbleAnimation: state => dispatch(endSpeechBubbleAnimation(state)),
    endCharacterAnimation: state => dispatch(endCharacterAnimation(state)),
    setCharacterPositionLeft: state => dispatch(setCharacterPositionLeft(state)),
    endCharAnimationComp: state => dispatch(endCharAnimationComp(state))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DropNav)