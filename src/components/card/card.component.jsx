import React,{useEffect} from 'react';
import './card.styles.scss'
const Card = ({id,techStack, about, title,imageLink,liveLink,repo}) => {

  useEffect(()=>{
    if (document.querySelector(`.card-top-back-${id}`).scrollHeight < 270 ){
      document.querySelector(`.curtain-${id}`).style.display = 'none'
    }
    document.querySelector(`.card-top-back-${id}`).addEventListener('scroll',(e)=>{
      e.target.children[1].children[0].style.opacity = (1 - (e.target.scrollTop / (e.target.parentNode.clientHeight / 5)))
    })
  })
  
  const techStackGenerator = (stacks) => {
    if (stacks){
      return stacks.map((stack,index)=>{
        if ( stack[0] !== '/'){
          return (
            <div style={{
              backgroundColor:"red",
              color:"white"
            }} key="index" >{stack}</div>
          )
        }
        return <img width="26" alt='tech stack' key={index} src={stack} />
      })
    } 
  }

  return(
    <div className='card'>
      <div className="card-top">
        <div className="card-top-front">
          <img alt={`${title}-pic`} src={imageLink} />
        </div>
        <div className={`card-top-back card-top-back-${id}`}>
          <div className="tech-stack">
              <p>{techStackGenerator(techStack)}</p>
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