import React from 'react';
import './char-x.styles.scss';

import SpeechBubble from '../../animations/assets.component/speech-bubble/speech-bubble.component';
import Character from '../../animations/assets.component/character/character.component';

const CharX = ({bubbleIsActive, bubbleFontSize, bubblePosTop ,bubbleScale,charLeftPos, speechMsg,characterDirection}) =>{
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
        left: `${charLeftPos}px`,
        position:"absolute"
      }}>
        <Character characterDirection={characterDirection}/>
      </div>
    </div>
  )
}

export default CharX;