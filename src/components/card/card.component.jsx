import React,{useEffect,useState} from 'react';
import './card.styles.scss'
import DaImg from '../da-img/DaImg.component';

const Card = ({id,techStack, about, title,imageLink,liveLink,repo}) => {

  const [toolTip, setToolTip] = useState('');

  const mobile_mouseOnCards = (x) => {
    if (x.position === "top" && x.action === "click"){
      tech_icon_fadein()
    } else if (x.position === "top" && x.action === "leave"){
      tech_icon_hide()
    }
  }

  const laptop_mouseOnCards = (x) => {
    if(x.position === "back" && x.action === "enter"){
      tech_icon_fadein()
    } else if (x.position === "back" && x.action === "leave"){
      tech_icon_hide()
    }
  }

  const cardFliper = (x) => {
    const invisibleClickShield_element = document.querySelector(`.invisibleClickShield-${id}`);
    const invisibleClickShield_function = () => {
      invisibleClickShield_element.style.pointerEvents = "none";
      invisibleClickShield_element.removeEventListener('click',invisibleClickShield_function);
    }
    invisibleClickShield_element.style.pointerEvents = "all"
    invisibleClickShield_element.addEventListener('click',invisibleClickShield_function);
  }

  useEffect(()=>{
    document.querySelector(`.card-top-${id}`).addEventListener('click',()=>{mobile_mouseOnCards({position: "top" , action: "click"})})
    document.querySelector(`.card-top-${id}`).addEventListener('mouseleave',()=>{mobile_mouseOnCards({position: "top" , action: "leave"})})
    document.querySelector(`.card-top-back-${id}`).addEventListener('mouseenter',()=>{laptop_mouseOnCards({position: "back" , action: "enter"})})
    document.querySelector(`.card-top-back-${id}`).addEventListener('mouseleave',()=>{laptop_mouseOnCards({position: "back" , action: "leave"})})

    document.querySelector(`.card-top-front-${id}`).addEventListener('click', cardFliper );
    
    
    const opacityAdjust = (e) => {
      e.target.children[1].children[0].style.opacity = (1 - (e.target.scrollTop / (e.target.parentNode.clientHeight / 5)))
    }
    
    document.querySelector(`.card-top-back-${id}`).addEventListener('scroll', opacityAdjust);
    document.querySelector(`.about-${id}`).style.display = 'none';
  
    return ()=>{
      document.querySelector(`.card-top-back-${id}`).removeEventListener('scroll', opacityAdjust)
    }
  },[])


  const tech_icon_fadein = () => {
    document.querySelector(`.about-${id}`).style.display = 'inline';
    const setDelay = (el,x) => {
      setTimeout(()=>{
        el.classList.add('active')
      },x)
    }
    const tech_stack_img_elem_list = document.querySelectorAll(`.tech-stack-icons-${id}`);
    let time_offset = 300
    for (let el of tech_stack_img_elem_list){
      setDelay(el , time_offset)
      time_offset = time_offset + 100;
    }
  }

  const tech_icon_hide = () => {
    document.querySelector(`.about-${id}`).style.display = 'none';
    const setDelay = (el,x) => {
      setTimeout(()=>{
        el.classList.remove('active')
      },x)
    }
    const tech_stack_img_elem_list = document.querySelectorAll(`.tech-stack-icons-${id}`);
    let time_offset = 300
    for (let el of tech_stack_img_elem_list){
      setDelay(el , time_offset)
      time_offset = time_offset + 100;
    }
  }



  const techStackGenerator = (stacks) => {
    if (stacks){
      return stacks.map((stack,index)=>{
        if (typeof stack === 'object'){
          return <div key={index} onMouseEnter={()=>{setToolTip(stack.name)}} className="icon-wrapper"><img className={`tech-stack-icons tech-stack-icons-${id}`} alt={`${stack.name}`} src={stack.icon} /><span className="tooltip-tip"></span></div>
        } else if (typeof stack === 'string'){
          return (
            <div className='tech-stack-texts' key="index" >{stack}</div>
          )
        }
      })
    } 
  }

  const pullTheCurtain = () => {
      ((document.querySelector(`.card-top-back-${id}`).scrollHeight >= 295) ?
      (document.querySelector(`.curtain-${id}`).style.display = 'block') :
      (document.querySelector(`.curtain-${id}`).style.display = 'none'))
  }

  return(
    <>
    <div className="card-wrapper">
      <div className={`invisibleClickShield invisibleClickShield-${id}`} ></div>
      <div className='card'>
        <div onMouseEnter={()=>{pullTheCurtain()}} className={`card-top card-top-${id}`}>
          <div className={`card-top-front card-top-front-${id}`}>
            <div className="arrow" ><img alt='arrow' src={require('../../assets/arrow.png')} /></div>
            <DaImg alt={`${title}-pic`} src={imageLink} />
            {/* <img alt={`${title}-pic`} src={imageLink} /> */}
          </div>
          <div className={`card-top-back card-top-back-${id}`}>
            <div className="tech-stack">
                {techStackGenerator(techStack)}
                <div className="tooltip-body">
                  {toolTip}
                </div>
            </div>
            <div className={`about about-${id}`}>
              <div className={`curtain curtain-${id}`} ></div>
              {about}
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <div className="bottom-wrapper">
            <p className="title">{title.toUpperCase()}</p>
            <a tabIndex="0" className={`button1 ${liveLink ? null : "gray"}`}  rel="noopener noreferrer" target="_blank" href={liveLink ? liveLink : null}>{liveLink ? "Live Link" : "CLI Program"}</a>
            <a tabIndex="0" className={`button2 ${repo ? null : "gray"}`} rel="noopener noreferrer" target="_blank" href={repo}>{repo ? "Repo Link" : "Private Repo"}</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card;