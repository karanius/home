import React from 'react';
import './card.styles.scss'
const Card = ({demo,title,imageLink,liveLink,repo}) => {
  return(
    <div className='card'>
      <img loading="lazy" className="card-img" src={imageLink} alt='pix'  />
      <p className='card-title'>{title.toUpperCase()}</p>
      <div className="card-buttons">
        <a className={`${liveLink ? null : "gray"}`}  rel="noopener noreferrer" target="_blank" href={liveLink}>Live Link</a> 
        <a rel="noopener noreferrer" target="_blank" href={repo}>Repo</a>
      </div>
    </div>
  )
}

export default Card;