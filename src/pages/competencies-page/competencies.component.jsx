

import React, {useState,useEffect} from 'react';
import './competencies.styles.scss';

import tieSVG from '../../animations/svgs/tie.svg'
import htmlSVG from '../../animations/svgs/html5.svg';
import cssSVG from '../../animations/svgs/css3.svg';
import sassSVG from '../../animations/svgs/sass.svg';
import bootstrapSVG from '../../animations/svgs/bootstrap.svg';
import jsSVG from '../../animations/svgs/js.svg';
import jsuqerySVG from '../../animations/svgs/jquery.svg'
import nodeSVG from '../../animations/svgs/node.svg';
import reactSVG from '../../animations/svgs/react.svg';
import gitSVG from '../../animations/svgs/git.svg';
import mysqlSVG from '../../animations/svgs/mysql.svg'
import mongoSVG from '../../animations/svgs/mongo.svg'

import TopMargin from '../../components/top-margin/top-margin-component';
import BottomMargin from '../../components/bottom-margin/bottom-marign.components';
import Footer from '../../components/footer/footer.component';

import CharX from '../../components/char-x/char-x.component';
import Gear from '../../components/gear/gear.component';

const Competencies = () => {

  const [bubbleIsActive] = useState(true);
  const [bubbleTopPos] = useState(0);
  const [speechMsg] = useState([ 'look at me!' , 2000 , 'I can do the Moonwalk' , 3000 , ' 🤩' , 3000  ]);

  const [charLeftPos,setCharLeftPos] = useState(-50);
  const [charDirection, setCharDirection] = useState('right');

  const [charSwitchesDirection, setCharSwitchesDirection ] = useState(true);
  const [initialScrollHappened , setInitialScrollHappened ] = useState(false);
  const [initialAnimationHappend , setInitialAnimationHappend ] = useState(false);

  const [topMarginStatus,setTopMarginStatus] = useState(false);
  const [bottomMarginStatus,setBottomMarginStatus] = useState(false);
  const [topCardStatus, setTopCardStatus] = useState(false);
  const [msgTitleIsVisible , setMsgTitleIsVisible] = useState(false)
  const [lTwoIsVisible , setLTwoIsVisible] = useState(false);
  const [lOneIsVisible, setLOneIsVisible] = useState(false);
  const [insideCardIsVisible , setInsideCardIsVisible] = useState(false);

  useEffect(()=>{ 
    window.scrollTo({
      top: 65 ,
      behavior:"smooth"
    })
    setInitialScrollHappened(true);
    window.addEventListener('scroll', scrollAnimationFunciton);


    return () => {
        window.removeEventListener('scroll', scrollAnimationFunciton);
    }
  },[])
  
  useEffect(()=>{ 
    let unmounted = false;

      const distanceStart = document.querySelector('.dev-kavian-name').offsetLeft;
      const distanceEnd = document.querySelector('.dev-kavian-name').offsetWidth + document.querySelector('.dev-kavian-name').offsetLeft - 60;
      const charCurrentPosition = document.querySelector('.character-position').offsetLeft;
      
  
      if(charSwitchesDirection){
        if (charDirection === 'right'){
          if (!unmounted){
            setCharDirection('left') 
            setCharLeftPos(distanceStart)
          }
        } else if (charDirection === 'left') {
          if (!unmounted){
            setCharDirection('right');
            setCharLeftPos(distanceEnd)
          }
        }
        if (!unmounted){
          setCharSwitchesDirection(false)
        }
      }
  
      if (!charSwitchesDirection){
        if (charDirection === 'right') {
          if(charCurrentPosition >= distanceStart){
            if(charCurrentPosition <= distanceStart){
              setCharSwitchesDirection(true);
              setTimeout(()=>{
                if (!unmounted){
                  setCharLeftPos(prevPos => {
                    return prevPos - 5
                  })
                }
              },65)
            } else {
              setTimeout(()=>{
                if (!unmounted){
                  setCharLeftPos(prevPos => {
                    return prevPos - 5
                  })
                }
              },65)
            }
          } else {
            setCharSwitchesDirection(true);
            setCharLeftPos(prevPos => {
              return prevPos + 5
            })
          }
        } else if (charDirection === 'left'){
          if(charCurrentPosition <= distanceEnd){
            if(charCurrentPosition >= distanceEnd){
              setCharSwitchesDirection(true);
              setTimeout(()=>{
                if (!unmounted){
                  setCharLeftPos(prevPos => {
                    return prevPos + 5
                  })
                }
              },65)
            } else {
              setTimeout(()=>{
                if (!unmounted){
                  setCharLeftPos(prevPos => {
                    return prevPos + 5
                  })
                }
              },65)
            }
          }else{
            if (!unmounted){
              setCharSwitchesDirection(true);
              setCharLeftPos(prevPos => {
                return prevPos - 5
              })
            }
          }
        }
      }

    return ()=>{
      unmounted = true;
    }

  },[charLeftPos])

  
  useEffect(()=>{
    let unmounted = false;

    if(initialScrollHappened && !unmounted){

      setTimeout(()=>{
        if(!unmounted){
          setTopCardStatus('appear')
          setTimeout(()=>{
            if(!unmounted){
              setTopMarginStatus('open')
              setBottomMarginStatus('open')
              setTimeout(()=>{
                if(!unmounted){
                  document.querySelector('.firstCard').classList.add('open');
                  setTimeout(()=>{if(!unmounted) {setMsgTitleIsVisible('appear')}},700)
                  setTimeout(()=>{if(!unmounted) {setLOneIsVisible('appear')}},800)
                  setTimeout(()=>{if(!unmounted) {setLTwoIsVisible('appear')}},900)
                  setTimeout(()=>{if(!unmounted) {setInsideCardIsVisible('appear')} },1000)
                  setTimeout(()=>{if(!unmounted) {setInitialAnimationHappend(true)} },1000)
                }
              },455)
            }
          },300)
        }
      },655)
    }

    return ()=>{
      unmounted = true;
    }
  },[initialScrollHappened])

  useEffect(()=>{
    let unmounted = false;
    const skillsScrollAnimation = () => {
      if (!unmounted){
        const distanceFromTop = window.scrollY;
        const listOfElems = document.querySelectorAll('.second-load');
        listOfElems.forEach(elem=>{
          if (distanceFromTop + window.innerHeight >= elem.offsetTop + ( 2 * (elem.offsetHeight / 3))){
            if (!elem.classList.contains('second-load-loaded')){
              elem.classList.add('second-load-loaded');
            }
          }
          // console.log(elem)
        })
      }
    }

    if(initialAnimationHappend){
      window.addEventListener('scroll',skillsScrollAnimation)
    }

    return ()=>{
      unmounted = true;
      window.removeEventListener('scroll',skillsScrollAnimation)
    }
  },[initialAnimationHappend])



  const scrollAnimationFunciton = (e) => {
    const distanceFromTop = window.scrollY;
    if(distanceFromTop <= 360){
      const dev_kavian_elem = document.querySelector('.dev-kavian');
      const gear_elem = document.querySelector('.gear-holder');
      
      //logic section:
      // .dev-kavian - opacity
      dev_kavian_elem.style.opacity =  `${ (1 / ((distanceFromTop - 10 ) + 1) < 0) ? 1 : (1 / ((distanceFromTop - 10 ) + 1)) }`;
      if (Number(dev_kavian_elem.style.opacity) < 0.03) { 
        dev_kavian_elem.style.opacity = 0 
      }
      //  .gear-holder - opacity
      gear_elem.style.opacity = (distanceFromTop + 10) / 100 ;    
    }
  }

  return(
    <div className="comp-main-container">

      <TopMargin open={topMarginStatus} height={260} noShine={true}>
        <div className={`top-card ${topCardStatus}`}>
          <div className="dev-kavian" >
            <CharX
              bubbleIsActive={bubbleIsActive} 
              bubbleFontSize={2.3} 
              bubblePosTop={bubbleTopPos} 
              bubbleScale={0.70} 
              charLeftPos={charLeftPos} 
              speechMsg={speechMsg}
              characterDirection={charDirection}
            />
            <p className="dev-kavian-name" >DEV KAVIAN</p>
          </div>
          <Gear />
        </div>
      </TopMargin>

      <div className="firstCard">
        <h1 tabindex="0" className={`msg-title ${msgTitleIsVisible}`}>
          FULL STACK
        </h1>
        
        <ul className="list-container">
          <li  className={`list ${lOneIsVisible}`}>
            <p className={`title-logo ${insideCardIsVisible}`}>
              {`</>`}
            </p>
            <h3 tabindex="0" className={`title-msg ${insideCardIsVisible}`} >Front-End</h3> <p tabindex="0" className={`title-description ${insideCardIsVisible}`}>To make it look Good and<br/>user friendly.</p>
          </li>
          <li className={`list ${lTwoIsVisible}`}>
            <p className={`title-logo ${insideCardIsVisible}`}>
              { `{ ` } <img width='15' alt='tie' src={tieSVG} /> { ` }`}
            </p>
            <h3 tabindex="0" className={`title-msg ${insideCardIsVisible}`}>Back-End</h3> <p tabindex="0" className={`title-description ${insideCardIsVisible}`}>To make it function With<br/>no headaches.</p>
          </li>
        </ul> 
      </div>


      <BottomMargin 
        height={850} 
        open={bottomMarginStatus} 
        >
        <div className="second-card">
          <div className="skills-wrapper">
            <div tabindex="0" className="second-load skill-title">SKILLS</div>
            <div className="skill-logos-container">
              <img tabindex="0" className="second-load second-load-left html" alt='HTML: Hyper Text Markup Language Version 5' title='HTML: Hyper Text Markup Language Version 5' src={htmlSVG} />
              <img tabindex="0" className="second-load second-load-right" alt='CSS: Cascading Style Sheets Version 3' title='CSS: Cascading Style Sheets Version 3' src={cssSVG} />
              <img tabindex="0" className="second-load second-load-left" alt='Sass: Syntactically Awesome Style Sheets' title='Sass: Syntactically Awesome Style Sheets' src={sassSVG} />
              <img tabindex="0" className="second-load second-load-right" alt='Bootstrap: a front end library' title='Bootstrap: a front end library' src={bootstrapSVG} />
              <img tabindex="0" className="second-load second-load-left" alt='JS: Javascript' title='JS: Javascript' src={jsSVG} />
              <img tabindex="0" className="second-load second-load-right" alt='jQuery: javascript framework' title='jQuery: javascript framework' src={jsuqerySVG} />
              <img tabindex="0" className="second-load second-load-left" alt='Node.js: JavaScript run-time environment that executes code outside a browser.' title='Node.js a JavaScript run-time environment that executes code outside a browser.' src={nodeSVG} />
              <img tabindex="0" className="second-load second-load-right react" alt='React.js: Front End javascript Framework' title='React.js Front End javascript Framework' src={reactSVG} />
              <img tabindex="0" className="second-load second-load-left" alt='Git: version-control system' title='Git: version-control system' src={gitSVG} />
              <img tabindex="0" className="second-load second-load-right" alt='MySQL: Structured Query Language' title='MySQL: Structured Query Language' src={mysqlSVG} />
              <img tabindex="0" className="second-load" alt='MongoDB: noSQL database technology' title='MongoDB: noSQL database technology' src={mongoSVG} />
            </div>
            <p tabindex="0" className="second-load and-more" >and more</p>
          </div>
        </div>

      </BottomMargin>




      <Footer/>

    </div>
  )
}
export default (Competencies);