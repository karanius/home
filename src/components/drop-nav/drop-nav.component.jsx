import React from 'react';
import './drop-nav.styles.scss';


import {Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {setCharacterPositionLeft,endCharacterAnimation,endSpeechBubbleAnimation , endCharAnimationComp} from '../../redux/animation/animation.action';
import {isBurgerOpen} from '../../redux/nav-bar/nav-bar.actions'

class DropNav extends React.Component {
  constructor(props){
    super(props)

    this.state={
      isActivated: false,
    }
  }

  componentDidMount(){
    const {isBurgerOpen,setCharacterPositionLeft, endSpeechBubbleAnimation, endCharacterAnimation , endCharAnimationComp} = this.props;

    document.querySelectorAll('.nav-link').forEach(elem=>{
      elem.addEventListener('click',e=>{
        isBurgerOpen(null);
        if (elem.innerText.toLowerCase() === 'competencies'){
          endSpeechBubbleAnimation(null)
          endCharacterAnimation(null)
          setCharacterPositionLeft(-50)
        }else if (elem.innerText.toLowerCase() === 'portfolio') {
          endSpeechBubbleAnimation(null)
          endCharacterAnimation(null)
          setCharacterPositionLeft(-50)
          endCharAnimationComp(null)
        } else if (elem.innerText.toLowerCase() === "contact") {
          endSpeechBubbleAnimation(null)
          endCharacterAnimation(null)
          setCharacterPositionLeft(-50)
          endCharAnimationComp(null)
        }
      })
    })
  }
  
  openClose = () => {
    const {burgerOpen} = this.props
    let requestAnimId;

    if (burgerOpen === true && this.state.isActivated) {
      const close = (timestamp) => {
          const positionTop = document.querySelector('.drop-nav').offsetTop;
          if ( positionTop <= 35) {
            document.querySelector('.drop-nav').style.top = ((positionTop + 5) + 'px')
            setTimeout(()=>{requestAnimationFrame(close)},14);
          } else {
            cancelAnimationFrame(requestAnimId)
          }
        }
        requestAnimId = requestAnimationFrame(close)
      } else if (burgerOpen === null && this.state.isActivated) {
        const open = (timestamp) => {
          const positionTop = document.querySelector('.drop-nav').offsetTop;
          if ( positionTop >= 5) {
            document.querySelector('.drop-nav').style.top = ((positionTop - 5) + 'px')
            setTimeout(()=>{requestAnimationFrame(open)},14);
          } else {
            cancelAnimationFrame(requestAnimId)
          }
        }
        requestAnimId = requestAnimationFrame(open)
      } else {
        this.setState({isActivated:true})
        // console.clear()
      }
  }


  render(){
    this.openClose()
    return(
      <div className="drop-nav" >
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
    endCharAnimationComp: state => dispatch(endCharAnimationComp(state)),
    isBurgerOpen: state => dispatch(isBurgerOpen(state))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DropNav)