

import React from 'react';
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
import {setCharacterPositionLeftComp , endCharAnimationComp , startCharAnimationComp ,setCharacterDirectionAnimation} from '../../redux/animation/animation.action';
import {connect} from 'react-redux'


class Competencies extends React.Component {

  constructor(){
    super()

    this.state={
        initialScrollExecuted: null,
    }
  }

  initialIntroScrol = () => { 
    let requestId;
    let top = 0;
    const scrollDown = async () => {
      console.log('~~')
      if (top <= 65) {
        window.scrollTo({
          top: top ,
          behavior:"smooth"
        })
        top = top + 10
        setTimeout(()=>requestAnimationFrame(scrollDown),30)
      }else {
        this.setState({initialScrollExecuted: true});
        cancelAnimationFrame(requestId)
      }
    }
    requestId = requestAnimationFrame(scrollDown)
  }


  componentWillUnmount(){
    this.props.endCharAnimationComp(null)
    window.removeEventListener('scroll', this.scrollAnimationFunciton);
  }

  componentDidMount(){
    window.secondLoad = 0;
    this.props.startCharAnimationComp(true);
    window.addEventListener('scroll', this.scrollAnimationFunciton);
    this.initialIntroScrol();
    this.moonWalk()

  }

  moonWalk = () => {
    const {setCharacterDirection, characterDirection ,setCharacterPositionLeftComp } = this.props;

    const distanceEnd = document.querySelector('.dev-kavian-name').offsetWidth + document.querySelector('.dev-kavian-name').offsetLeft - 60;
    const distanceStart = document.querySelector('.dev-kavian-name').offsetLeft;      
    let charCurrentPosition = document.querySelector('.character-position').offsetLeft


    characterDirection === 'right' ? 
      setTimeout(()=>{
        setCharacterDirection('left') 
        setCharacterPositionLeftComp(distanceStart)
      },0)
       : 
       setTimeout(()=>{
        setCharacterDirection('right');
        setCharacterPositionLeftComp(distanceEnd)
      },0)
            
    const steps = (timestamp) =>{
      if (this.props.characterIsActiveComp) {
        charCurrentPosition = document.querySelector('.character-position').offsetLeft;
        if (characterDirection === 'right') {
          if (charCurrentPosition <= distanceEnd){
            // keep walking 
            setCharacterPositionLeftComp(this.props.characterLeftComp + 5)
            setTimeout(()=>{requestAnimationFrame(steps)},80);
          } else {
            // end the requestAnimationFrame and call moonwalk
            cancelAnimationFrame(compReqID)
            this.moonWalk()
          }
        } else if (characterDirection === 'left') {
          if (charCurrentPosition >= distanceStart){
            setCharacterPositionLeftComp(this.props.characterLeftComp - 5)
            setTimeout(()=>{requestAnimationFrame(steps)},80);
          } else {
            cancelAnimationFrame(compReqID)
            this.moonWalk()
          }
        }
      } else {
        cancelAnimationFrame(compReqID)
      }
    }
    
    const compReqID = requestAnimationFrame(steps)
  }

  scrollAnimationFunciton = (e) => {
    const distanceFromTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const windowBottom = distanceFromTop + windowHeight;


    const dev_kavian_elem = document.querySelector('.dev-kavian');

        //logic section:
        // .dev-kavian - opacity
        dev_kavian_elem.style.opacity =  `${ (1 / ((distanceFromTop - 10 ) + 1) < 0) ? 1 : (1 / ((distanceFromTop - 10 ) + 1)) }`;
        if (Number(dev_kavian_elem.style.opacity) < 0.03) { 
          dev_kavian_elem.style.opacity = 0 
        }
        //  .gear-holder - opacity
        document.querySelector('.gear-holder').style.opacity = (distanceFromTop - 10) / 100 ;
        

        if (distanceFromTop < 100) {
          //initialise section :
          if (this.state.initialScrollExecuted === true){
            this.setState({initialScrollExecuted:null});
            
            setTimeout(()=>{dev_kavian_elem.classList.remove("hide")},500)
            
            let requestId;
            let listOfFirstElem = document.querySelectorAll('.firstLoad');
            let pos = 0;
            const firstLoad = () => {
              console.log("~~")
              if (pos <= listOfFirstElem.length - 1) {
                listOfFirstElem[pos].classList.remove("hide");
                pos = pos + 1
                setTimeout(()=>{requestAnimationFrame(firstLoad)},200)
              } else {
                console.log('firstLoad: done')
                this.setState({initialScrollExecuted:"readyForSecond"});
                document.querySelectorAll('.title-logo').forEach(el => {
                  setTimeout(()=>{el.classList.remove('hide')},700)
                })
                cancelAnimationFrame(requestId)
              }
            }
            requestId = requestAnimationFrame(firstLoad);
          }
        }  


      if(this.state.initialScrollExecuted === "readyForSecond"){
        console.log('here')
        const offsetAdjuster = document.querySelector('.comp-main-container').offsetTop;
        const elemList = document.querySelectorAll('.secondLoad');
        const listLength = elemList.length;
        if ( listLength - 1 >= window.secondLoad){
          elemList.forEach(elem=>{
            const elementHeightAdjuster = (Math.floor(elem.offsetHeight / 3));
            const heightOfElemFromTop = elem.offsetTop + offsetAdjuster + elementHeightAdjuster ;
            if ((windowBottom >= heightOfElemFromTop) && (elem.classList.contains('notLoaded')) ) {
              if (elem.classList.contains('right')){
                elem.classList.remove('notLoaded' , "is-hiding")
                elem.style.animation = "logoIntroRight 0.7s ease-in-out"
              } else if (elem.classList.contains('left')){
                elem.classList.remove('notLoaded' , "is-hiding")
                elem.style.animation = "logoIntroLeft 1s ease-in-out"
              } else {
                elem.classList.remove('notLoaded' , "is-hiding")
                elem.style.animation = "fullStackDeveloperIntro 0.5s ease-in-out"
              }
              window.secondLoad = window.secondLoad + 1
            } 
          })
        } else {
          this.setState({initialScrollExecuted:'done'})
        }
      }
    } 


  render(){
    const {characterLeftComp} = this.props;
    return(
      <div className="comp-main-container">

        <div className="firstCard">
            

          <div className="gear-container">
            <div className="dev-kavian" >
              <div className='character-container'>
                <div className='character-position' style={{
                  left: `${characterLeftComp}px`,
                  position:"absolute"
                }}>
                  <Character />
                </div>
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

 

          <div className="msg-container">
            <div className="msg-title-container">
              <h1 className="msg-title firstLoad first-card-intro hide">
                I am: <br/>Full-Stack
              </h1>
              <ul className="list-container">
                <li className="list">
                  <p className="title-logo hide">
                    {`</>`}
                  </p>
                  <h3 className="firstLoad first-card-intro hide" >Front-End Design</h3> <p className=" firstLoad first-card-intro hide">To Make It Look Good.<br/>User Friendly.</p>
                </li>
                <li className="list">
                  <p className="title-logo hide">
                    { `{ ` } <img width='15' alt='tie' src={tieSVG} /> { ` }`}
                  </p>
                  <h3 className="firstLoad first-card-intro hide">Back-End Design</h3> <p className="firstLoad first-card-intro hide">To Make It Function.<br/>No Aheadaches.</p>
                </li>
              </ul>
            </div>
          </div>


        </div>

        <div className="second-card">
            <h1 className=" tech-stack-title"> 
              <p className="is-hiding notLoaded secondLoad">I am <br/> Proficient In:</p>
            </h1>
            <div className="tech-stack-logos-container">
              <div className="tech-stack-logo">
                <img className="is-hiding notLoaded secondLoad left" alt='HTML: Hyper Text Markup Language Version 5' title='HTML: Hyper Text Markup Language Version 5' src={htmlSVG} />
                <img className="is-hiding notLoaded secondLoad right" alt='CSS: Cascading Style Sheets Version 3' title='CSS: Cascading Style Sheets Version 3' src={cssSVG} />
                <img className="is-hiding notLoaded secondLoad left" alt='Sass: Syntactically Awesome Style Sheets' title='Sass: Syntactically Awesome Style Sheets' src={sassSVG} />
                <img className="is-hiding notLoaded secondLoad right" alt='Bootstrap: a front end library' title='Bootstrap: a front end library' src={bootstrapSVG} />
                <img className="is-hiding notLoaded secondLoad left" alt='JS: Javascript' title='JS: Javascript' src={jsSVG} />
                <img className="is-hiding notLoaded secondLoad right" alt='jQuery: javascript framework' title='jQuery: javascript framework' src={jsuqerySVG} />
                <img className="is-hiding notLoaded secondLoad left" alt='Node.js: JavaScript run-time environment that executes code outside a browser.' title='Node.js a JavaScript run-time environment that executes code outside a browser.' src={nodeSVG} />
                <img className="is-hiding notLoaded secondLoad right" alt='React.js: Front End javascript Framework' title='React.js Front End javascript Framework' src={reactSVG} />
                <img className="is-hiding notLoaded secondLoad left" alt='Git: version-control system' title='Git: version-control system' src={gitSVG} />
                <img className="is-hiding notLoaded secondLoad right" alt='MySQL: Structured Query Language' title='MySQL: Structured Query Language' src={mysqlSVG} />
                <img className="is-hiding notLoaded secondLoad left" alt='MongoDB: noSQL database technology' title='MongoDB: noSQL database technology' src={mongoSVG} />
                <p className="is-hiding notLoaded secondLoad right and-more" >and more</p>

              </div>
              
            </div>



        </div>



      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCharacterDirection: state => dispatch(setCharacterDirectionAnimation(state)),
    setCharacterPositionLeftComp: state => dispatch(setCharacterPositionLeftComp(state)),
    startCharAnimationComp: state => dispatch(startCharAnimationComp(state)),
    endCharAnimationComp: state => dispatch(endCharAnimationComp(state))
  }
}

const mapStateToProps = ({animation}) => {
  return {
    characterDirection: animation.characterDirection,
    characterLeftComp: animation.characterLeftComp,
    characterIsActiveComp: animation.characterIsActiveComp,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Competencies);