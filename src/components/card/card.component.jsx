import React from 'react';
import './card.styles.scss'
const Card = ({demo,title,imageLink,liveLink,repo}) => {
  return(
    <div className='card'>
      <img loading="lazy" className="card-img" src={imageLink} alt='pix'  />
      <p tabindex="0" className='card-title'>{title.toUpperCase()}</p>
      <div className="card-buttons">
        <a tabindex="0" className={`${liveLink ? null : "gray"}`}  rel="noopener noreferrer" target="_blank" href={liveLink}>
          {liveLink ? "Live Link" : "CLI Program"}
        </a> 
        <a tabindex="0" rel="noopener noreferrer" target="_blank" href={repo}>Repo</a>
      </div>
    </div>
  )
}

export default Card;