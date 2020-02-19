import React , {useState,useEffect} from 'react';
import Character from '../assets.component/character/character.component';
import './X.style.css'
import SpeachBubble from '../assets.component/speech-bubble/speech-bubble.component';

const X = () => {

  const [bubbleTopPos] = useState(100);
  const [bubbleIsActive,setBubbleIsActive] = useState(false);
  const [speechMsg] = useState(['Hi! 👋' , 2000 , 'My name is Kavian 😊' , 4000 ,  ' and I do the "dev" thing! ❤️' , 4000 , "Welcome to my website! 🙌" , 3000 , 'Hope you 👍 it!' , 3000 , "I 🛠️ it myself!! ...using the ⚛️ library" , 3000 , "I love ⚛️" , 4000 , "Please check out the rest of my website." , 5000 ]);

  const [charDirection, setCharDirection] = useState('right');
  const [charLeftPos,setCharLeftPos] = useState(-50);
  const [charIsActive,setCharIsActive] = useState(true)
  
  const [pageCenterX,setPageCenterX] = useState(window.innerWidth/2);
  const [pageBottomY,setPageBottomY] = useState(window.innerHeight-250);

  
  useEffect(()=>{
    window.scrollTo({
      top: 0 ,
      behavior:"smooth"
    })
    const adjustCharPos = () =>{
      setPageCenterX(window.innerWidth/2)
      setPageBottomY(window.innerHeight-250)
    }

    window.addEventListener('resize' , adjustCharPos);
    
    return ()=>{
      window.removeEventListener('resize' , adjustCharPos);
    }
  },[])

  useEffect(()=>{
    let unmounted = false;

    const walk =() => {
      if (!unmounted){
        setCharLeftPos(prev=>{
          return prev + 5
        })
      }
    }
    if (charIsActive){
      if (charLeftPos < pageCenterX){
        setTimeout(walk,100)
      } else {
        setCharIsActive(false);
        setCharDirection('stand')
        setBubbleIsActive(true);
      }
    }

    return ()=>{
      unmounted = true;
    }

  },[charLeftPos])

  return(
      <div className="x-container">
          {
            bubbleIsActive ? 
            <SpeachBubble 
              isActive={bubbleIsActive} 
              top={bubbleTopPos} 
              left={charLeftPos} 
              steps={speechMsg}               
            /> : 
            null
          }
        <div className='character-position' style={{
          top: `${pageBottomY}px`,
          left: `${charLeftPos}px`,
          position: 'absolute'
        }}>
          <Character characterDirection={charDirection} />
        </div>
      </div>
    )
}

export default (X);