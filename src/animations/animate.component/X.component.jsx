import React , {useState,useEffect} from 'react';
import Character from '../assets.component/character/character.component';
import './X.style.css'
import SpeachBubble from '../assets.component/speech-bubble/speech-bubble.component';


const X = () => {

  const [bubbleTopPos] = useState(100);
  const [bubbleIsActive,setBubbleIsActive] = useState(false);
  const [speechMsg , setSpeechMsg] = useState(["Hold on..." , 1000 , "Almost there..." , 1000]);

  const [charDirection, setCharDirection] = useState('right');
  const [charLeftPos,setCharLeftPos] = useState(-50);
  const [charIsActive,setCharIsActive] = useState(true)
  
  const [pageCenterX,setPageCenterX] = useState(Number(`${window.innerWidth >= 800 ? 400 : (window.innerWidth / 2)}`));
  const [pageBottomY,setPageBottomY] = useState(window.innerHeight-250);

  const [halfWayReached , setHalfWayReached] = useState(false);
  const [midMsgSpoken , setMidMsgSpoken] = useState(false);

  useEffect(()=>{
    const adjustCharPos = () =>{
      setPageCenterX(Number(`${window.innerWidth >= 800 ? 400 : (window.innerWidth / 2)}`))
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
        if (pageCenterX >= 365) {
          if (charLeftPos > (pageCenterX / 2)){
            if (!halfWayReached){
              setBubbleIsActive(true);
              setHalfWayReached(true)
            } else if (!midMsgSpoken) {
              setMidMsgSpoken(true)
              setTimeout(()=>setBubbleIsActive(false),2400)
            }
          }
        }
      } else {
        setSpeechMsg(['Hi! 👋' , 2000 , 'My name is Kavian 😊' , 2000 ,  ' and I do the "dev" thing! ❤️' , 3000 , "Welcome to my website! 🙌" , 2000 , 'Hope you 👍 it!' , 2000 , "I built it using React" , 3000 , "I love coding from the ground up..." , 2200 ,"Please check out the rest of my website." , 3000 ])
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
              top={bubbleTopPos - 35} 
              left={charLeftPos + 50} 
              steps={speechMsg}       
              leftt={200}
            /> : 
            null
          }
        <div className='character-position' style={{
          top: `${pageBottomY}px`,
          left: `${charLeftPos + 50 }px`,
          position: 'absolute'
        }}>
          <Character characterDirection={charDirection} />
        </div>
      </div>
    )
}

export default (X);