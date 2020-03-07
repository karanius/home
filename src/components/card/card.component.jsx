import React,{useEffect,useState} from 'react';
import './card.styles.scss'

const Card = ({id,techStack, about, title,imageLink,liveLink,repo}) => {

  const [toolTip, setToolTip] = useState('');

  useEffect(()=>{
    document.querySelector(`.card-top-back-${id}`).addEventListener('scroll',(e)=>{
      e.target.children[1].children[0].style.opacity = (1 - (e.target.scrollTop / (e.target.parentNode.clientHeight / 5)))
    })
  },[])

  const techStackGenerator = (stacks) => {
    if (stacks){
      return stacks.map((stack,index)=>{
        if (typeof stack === 'object'){
          return <div key={index} onMouseEnter={()=>{setToolTip(stack.name)}} className="icon-wrapper"><img className='tech-stack-icons' alt={`${stack.name}`} src={stack.icon} /><span className="tooltip-tip"></span></div>
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
    <div className='card'>
      <div onMouseEnter={()=>{pullTheCurtain()}} className="card-top">
        <div className="card-top-front">
          <span className="ribbon">c<br/>l<br/>i<br/>c<br/>k</span>
          <img alt={`${title}-pic`} src={imageLink} />
        </div>
        <div className={`card-top-back card-top-back-${id}`}>
          <div className="tech-stack">
              {techStackGenerator(techStack)}
              <div className="tooltip-body">
                {toolTip}
              </div>
          </div>
          <div className="about">
            <div className={`curtain curtain-${id}`} ></div>
            {about}
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="bottom-wrapper">
          <p className="title">{title}</p>
          <a tabIndex="0" className={`button1 ${liveLink ? null : "gray"}`}  rel="noopener noreferrer" target="_blank" href={liveLink ? liveLink : null}>{liveLink ? "Live Link" : "CLI Program"}</a>
          <a tabIndex="0" className="button2" rel="noopener noreferrer" target="_blank" href={repo}>Repo</a>
        </div>
      </div>
    </div>
  )
}

export default Card;