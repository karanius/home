import React from 'react';
import './char-x.styles.scss';

import SpeechBubble from '../../animations/assets.component/speech-bubble/speech-bubble.component';
import Character from '../../animations/assets.component/character/character.component';

const CharX = ({charTopPos,bubbleIsActive, bubbleFontSize, bubblePosTop ,bubbleScale,charLeftPos, speechMsg,characterDirection}) =>{
  return(
    <div>
      <SpeechBubble 
        isActive={bubbleIsActive} 
        fontSize={bubbleFontSize} 
        top={bubblePosTop} 
        scale={bubbleScale} 
        left={charLeftPos} 
        stage={1} 
        steps={speechMsg}/>
      <div className='character-position' style={{
        position:"absolute",
        left: `${charLeftPos ? charLeftPos : null}px`,
        top: `${charTopPos ? charTopPos : null}px`
        
      }}>
        <Character characterDirection={characterDirection}/>
      </div>
    </div>
  )
}

export default CharX;