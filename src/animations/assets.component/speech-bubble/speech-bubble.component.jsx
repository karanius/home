import React ,{ useEffect} from 'react';
import './speech-bubble.styles.scss';
import Typer from '../Typer/Typer.component';


const SpeechBubble = (props) => {

  useEffect(()=>{
    adjusterFunction()
  },[])

  const adjusterFunction = () => {
    let reqI;
      const {isActive , top} = props;
      if (isActive){
        const adjust = () => {
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
      } 
  }

    return (
        <div className={`${props.isActive ? 'show' : null}`} style={{
          transform: `scale(${props.scale})`,
        }} >
          <div className="speech-bubble" >
            <div className="msg-itself" style={{
              fontSize: `${ props.fontSize ? props.fontSize : null }rem`
            }}> 
              <Typer steps={props.steps} /> 
            </div>
          </div>
        </div>
    )
}

export default (SpeechBubble);