import React ,{ useEffect} from 'react';
import './speech-bubble.styles.scss';
import Typer from '../Typer/Typer.component';


const SpeechBubble = (props) => {
 
  useEffect(()=>{
    let unmounted = false;
    let reqI;
      const {isActive , top, leftt} = props;
      if (isActive){
        const adjust = () => {
          if (document.querySelector('.character-position') && document.querySelector('.show') ){
            document.querySelector('.show').style.top = `${document.querySelector('.character-position').offsetTop - top }px`;
            document.querySelector('.show').style.left =  `${document.querySelector('.character-position').offsetLeft - (leftt ? leftt : 218)  }px`;
            if (!unmounted){
              setTimeout(()=>{requestAnimationFrame(adjust)},100)
            }
          } else {
            cancelAnimationFrame(reqI);
          }
        }
        reqI = requestAnimationFrame(adjust)
        
      } else {
        cancelAnimationFrame(reqI);
      } 

      return ()=>{
        unmounted = true;
      }
  },[])


    return (
        <div tabIndex="-1" className={`${props.isActive ? 'show' : null}`} style={{
          transform: `scale(${props.scale})`,
        }} >
          <div tabIndex="-1" className="speech-bubble" >
            <div tabIndex="-1" className="msg-itself" style={{
              fontSize: `${ props.fontSize ? props.fontSize : null }rem`
            }}> 
              <Typer steps={props.steps} /> 
            </div>
          </div>
        </div>
    )
}

export default (SpeechBubble);