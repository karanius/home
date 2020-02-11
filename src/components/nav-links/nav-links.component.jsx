import React from 'react';
import './nav-links.styles.scss'
import {Link} from 'react-router-dom';

import {endSpeechBubbleAnimation , endCharacterAnimation , setCharacterPositionLeft} from '../../redux/animation/animation.action'
import {connect} from 'react-redux';

class NavLinks extends React.Component {

  componentDidMount(){
    const {endSpeechBubbleAnimation , endCharacterAnimation , setCharacterPositionLeft} = this.props
    document.querySelectorAll('.nav-link').forEach(elem=>{
      elem.addEventListener('click',e=>{
        endSpeechBubbleAnimation(null)
        endCharacterAnimation(null)
        setCharacterPositionLeft(-50)
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
    endCharacterAnimation: state => dispatch(endCharacterAnimation(state))
  }
}

export default connect(null,mapDispatchToProps)(NavLinks);