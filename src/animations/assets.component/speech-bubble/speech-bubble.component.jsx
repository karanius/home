import React from 'react';
import './speech-bubble.styles.scss';
import Typer from '../Typer/Typer.component';

import {connect} from 'react-redux';
import {endSpeechBubbleAnimation } from '../../../redux/animation/animation.action';

class SpeechBubble extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      stage: this.props.stage,
      
    }
  }
  
  componentWillUnmount(){
    this.adjusterFunction(false)
  }

  componentDidMount(){
    this.adjusterFunction(true)
  }


  adjusterFunction = (x) => {
    let reqI;
    if (x) {
      const {isActive , top} = this.props;
      
      if (isActive){
        const adjust = () => {
          // console.log("top",top)
          // console.log("isActive",isActive)
          // console.log('running')
          if (document.querySelector('.character-position') && document.querySelector('.show') ){
            document.querySelector('.show').style.top = `${document.querySelector('.character-position').offsetTop - top }px`;
            document.querySelector('.show').style.left =  `${document.querySelector('.character-position').offsetLeft - 200}px`;
            setTimeout(()=>{requestAnimationFrame(adjust)},500)
          } else {
            cancelAnimationFrame(reqI);
          }
        }
        reqI = requestAnimationFrame(adjust)
        
      } else {
        cancelAnimationFrame(reqI);
        console.log('speechBubbleIs NOT Active')
      }
    } else {
      cancelAnimationFrame(reqI);
    }
    // cancelAnimationFrame(reqI);
  }


  render(){
    
    const {isActive , scale, steps} = this.props;

    // if (stage === 1) {
      return (

          <div className={`${isActive ? 'show' : null}`} style={{
            transform: `scale(${scale})`
          }} >

            <div className="speech-bubble" >
              <div className="msg-itself"> 
                <Typer steps={steps} /> 
              </div>
            </div>

          </div>

      )
    // }
  }
}




const mapDispatchToProps = dispatch => {
  return{
    endSpeechBubbleAnimation: state => dispatch(endSpeechBubbleAnimation(state)),
  }
}

export default connect(null,mapDispatchToProps)(SpeechBubble);