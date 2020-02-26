import React,{useEffect,useState} from 'react';
import './not-found-styles.scss'
import CharX from '../../components/char-x/char-x.component'

const NotFound = () => {

  const [charLeftpos , setCharLeftPos] = useState(window.innerWidth / 2 + 10)
  const [charTopPos , setCharTopPos] = useState(window.innerHeight / 2 - 100)

  useEffect(()=>{
    const posAdjuster =() => {
      setCharLeftPos(window.innerWidth / 2 + 10);
      setCharTopPos(window.innerHeight / 2 - 100);
    }
    window.addEventListener('resize', posAdjuster );
    return ()=>{
      window.removeEventListener('resize', posAdjuster );
    }
  },[])

  return(
    <div className="env">
      <CharX
        bubbleIsActive={true} 
        bubbleFontSize={2.3} 
        bubblePosTop={50} 
        bubbleScale={0.70} 
        charLeftPos={charLeftpos} 
        charTopPos={charTopPos}
        speechMsg={["oops!",3000,'404!',3000 , 'Page not found..' , 3000 ]}
        characterDirection={'stand'}
      />
    </div>
  )
}

export default NotFound