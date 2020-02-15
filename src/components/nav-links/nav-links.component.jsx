import React from 'react';
import './nav-links.styles.scss'
import {Link} from 'react-router-dom';

import {endSpeechBubbleAnimationComp,endSpeechBubbleAnimation , endCharacterAnimation , setCharacterPositionLeft , endCharAnimationComp} from '../../redux/animation/animation.action'
import {isBurgerOpen} from '../../redux/nav-bar/nav-bar.actions'
import {connect} from 'react-redux';

class NavLinks extends React.Component {

  componentDidMount(){
    const {endSpeechBubbleAnimationComp,isBurgerOpen, endSpeechBubbleAnimation , endCharacterAnimation , setCharacterPositionLeft, endCharAnimationComp} = this.props
    document.querySelectorAll('.nav-link').forEach(elem=>{
      elem.addEventListener('click',e=>{
        isBurgerOpen(null);
        endSpeechBubbleAnimation(null)
        endCharacterAnimation(null)
        setCharacterPositionLeft(-50)
        if (elem.innerText.toLowerCase() === 'competencies'){
        }else if (elem.innerText.toLowerCase() === 'portfolio') {
          endSpeechBubbleAnimationComp(null)
          endCharAnimationComp(null)
        } else if (elem.innerText.toLowerCase() === "contact") {
          endSpeechBubbleAnimationComp(null)
          endCharAnimationComp(null)
        }
      })
    })
  }

  render(){
    return (
      <div className="nav-items" >
        <Link className="nav-link" to='/competencies'>COMPETENCIES</Link>
        <Link className="nav-link" to='/portfolio'>PORTFOLIO</Link>
        <Link className="nav-link" to='/contact'>CONTACT</Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setCharacterPositionLeft: state => dispatch(setCharacterPositionLeft(state)),
    endSpeechBubbleAnimation: state => dispatch(endSpeechBubbleAnimation(state)),
    endCharacterAnimation: state => dispatch(endCharacterAnimation(state)),
    endCharAnimationComp: state => dispatch(endCharAnimationComp(state)),
    isBurgerOpen: state => dispatch(isBurgerOpen(null)),
    endSpeechBubbleAnimationComp: state => dispatch(endSpeechBubbleAnimationComp(state))
  }
}

export default connect(null,mapDispatchToProps)(NavLinks);