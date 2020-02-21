

import React, {useState,useEffect} from 'react';
import './competencies.styles.scss';

import gearSVG from '../../animations/svgs/gear.svg';
import gear2SVG from '../../animations/svgs/gear2.svg';
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

import Character from '../../animations/assets.component/character/character.component';
import SpeechBubble from '../../animations/assets.component/speech-bubble/speech-bubble.component'
// import Parallax from '../../components/parallax/parallax.component';

const Competencies = () => {

  const [bubbleIsActive] = useState(true);
  const [bubbleTopPos] = useState(0);
  const [speechMsg] = useState([ 'look at me!' , 2000 , 'I can do the Moonwalk' , 3000 , ' 🤩' , 3000  ]);

  const [charLeftPos,setCharLeftPos] = useState(-50);
  const [charDirection, setCharDirection] = useState('right');
  // const [charIsActive,setCharIsActive] = useState(true);
  const [charSwitchesDirection, setCharSwitchesDirection ] = useState(true);

  const [initialScrollHappened , setInitialScrollHappened ] = useState(false);

  // const [secondLoad,setSecondLoad] = useState(0);


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


  const scrollAnimationFunciton = (e) => {
    const distanceFromTop = window.scrollY;
    // const windowHeight = window.innerHeight;
    // const windowBottom = distanceFromTop + windowHeight;
    
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
    // console.log(distanceFromTop)
    if (distanceFromTop >= 300) {
      dev_kavian_elem.style.display = 'none'
      gear_elem.style.display = 'none'
    } else {
      dev_kavian_elem.style.display = 'block'
      gear_elem.style.display = null
    }

    // if (distanceFromTop < 100) {
    //   //initialise section :
    //   if (initialScrollHappened === true){
    //     this.setState({initialScrollExecuted:null});
        
    //     setTimeout(()=>{dev_kavian_elem.classList.remove("hide")},500)
        
    //     let requestId;
    //     let listOfFirstElem = document.querySelectorAll('.firstLoad');
    //     let pos = 0;
    //     const firstLoad = () => {
    //       if (pos <= listOfFirstElem.length - 1) {
    //         listOfFirstElem[pos].classList.remove("hide");
    //         pos = pos + 1
    //         setTimeout(()=>{requestAnimationFrame(firstLoad)},200)
    //       } else {
    //         this.setState({initialScrollExecuted:"readyForSecond"});
    //         document.querySelectorAll('.title-logo').forEach(el => {
    //           setTimeout(()=>{el.classList.remove('hide')},500)
    //         })
    //         cancelAnimationFrame(requestId)
    //       }
    //     }
    //     requestId = requestAnimationFrame(firstLoad);
    //   }
    // }  

  }



        



    //   if(this.state.initialScrollExecuted === "readyForSecond"){
    //     const offsetAdjuster = document.querySelector('.comp-main-container').offsetTop;
    //     const elemList = document.querySelectorAll('.secondLoad');
    //     const listLength = elemList.length;
    //     if ( listLength - 1 >= window.secondLoad){
    //       elemList.forEach(elem=>{
    //         const elementHeightAdjuster = (Math.floor(elem.offsetHeight / 3));
    //         const heightOfElemFromTop = elem.offsetTop + offsetAdjuster + elementHeightAdjuster ;
    //         if ((windowBottom >= heightOfElemFromTop) && (elem.classList.contains('notLoaded')) ) {
    //           if (elem.classList.contains('right')){
    //             elem.classList.remove('notLoaded' , "is-hiding")
    //             elem.style.animation = "logoIntroRight 0.7s ease-in-out"
    //           } else if (elem.classList.contains('left')){
    //             elem.classList.remove('notLoaded' , "is-hiding")
    //             elem.style.animation = "logoIntroLeft 1s ease-in-out"
    //           } else {
    //             elem.classList.remove('notLoaded' , "is-hiding")
    //             elem.style.animation = "fullStackDeveloperIntro 0.5s ease-in-out"
    //           }
    //           window.secondLoad = window.secondLoad + 1
    //         } 
    //       })
    //     } else {
    //       this.setState({initialScrollExecuted:'done'})
    //     }
    //   }
  
  



    return(
      <div className="comp-main-container">
          <div className="top-card">

            <div className="dev-kavian" >
              <SpeechBubble isActive={bubbleIsActive} fontSize={2.3} top={bubbleTopPos} scale={0.70} left={charLeftPos} stage={1} steps={speechMsg}/>
              <div className='character-position' style={{
                left: `${charLeftPos}px`,
                position:"absolute"
              }}>
                <Character characterDirection={charDirection}/>
              </div>
              <p className="dev-kavian-name" >DEV KAVIAN</p>
            </div>

            <div className="gear-holder">
              <div className="gear-holder-left">
                <img className="left-gear" width="50"  alt="gear" src={gear2SVG} />
              </div>
              <div className="gear-holder-middle">
                <div className="middle-gear-wrapper">    
                  <img className="middle-gear"   alt="gear" src={gearSVG} />
                  <img className="small-middle-gear" width="50"  alt="gear" src={gear2SVG} />
                  <img className="smaller-middle-gear" width="50"  alt="gear" src={gear2SVG} />
                </div>
              </div>
              <div className="gear-holder-right">
                <img className="right-gear" width="50"  alt="gear" src={gear2SVG} />
              </div>
            </div>
          </div>
          
        <div className="clip-background-color">
          <div className="path-clip-border">
            <div className="path-clip"></div>
          </div>
        </div>


          <div className="firstCard">

                <h1 className="msg-title">
                  FULLSTACK
                </h1>
              
                <ul className="list-container">
                  <li className="list">
                    <p className="title-logo">
                      {`</>`}
                    </p>
                    <h3 className="title-msg" >Front-End</h3> <p className=" title-description">To Make It Look Good And<br/>User Friendly.</p>
                  </li>
                  <li className="list">
                    <p className="title-logo">
                      { `{ ` } <img width='15' alt='tie' src={tieSVG} /> { ` }`}
                    </p>
                    <h3 className="title-msg">Back-End</h3> <p className="title-description">To Make It Function With<br/>No Headaches.</p>
                  </li>
                </ul> 

          </div>




        <div className="clip-background-color-two">
          <div className="path-clip-border-two">
            <div className="path-clip-two"></div>
          </div>
        </div>


        <div className="second-card">
            <p className="skill-title">SKILLS</p>
            <div className="skill-logos-container">
              <img className="" alt='HTML: Hyper Text Markup Language Version 5' title='HTML: Hyper Text Markup Language Version 5' src={htmlSVG} />
              <img className="" alt='CSS: Cascading Style Sheets Version 3' title='CSS: Cascading Style Sheets Version 3' src={cssSVG} />
              <img className="" alt='Sass: Syntactically Awesome Style Sheets' title='Sass: Syntactically Awesome Style Sheets' src={sassSVG} />
              <img className="" alt='Bootstrap: a front end library' title='Bootstrap: a front end library' src={bootstrapSVG} />
              <img className="" alt='JS: Javascript' title='JS: Javascript' src={jsSVG} />
              <img className="" alt='jQuery: javascript framework' title='jQuery: javascript framework' src={jsuqerySVG} />
              <img className="" alt='Node.js: JavaScript run-time environment that executes code outside a browser.' title='Node.js a JavaScript run-time environment that executes code outside a browser.' src={nodeSVG} />
              <img className="react" alt='React.js: Front End javascript Framework' title='React.js Front End javascript Framework' src={reactSVG} />
              <img className="" alt='Git: version-control system' title='Git: version-control system' src={gitSVG} />
              <img className="" alt='MySQL: Structured Query Language' title='MySQL: Structured Query Language' src={mysqlSVG} />
              <img className="" alt='MongoDB: noSQL database technology' title='MongoDB: noSQL database technology' src={mongoSVG} />
            </div>
              <p className="and-more" >and more</p>
        </div>


        <footer className='comp-footer'>
          <b>Built By</b> &nbsp; <a className='link-footer' href='https://github.com/karanius'>DEV KAVIAN</a> &nbsp; <span className="footer-year">2020</span>
        </footer>



      </div>
    )
}
export default (Competencies);