import React from 'react';
import './top-image.styles.scss'

const TopImage = () => {
  return(
    <div className="img-wrapper" >
      <div className="picture-frame" >
        <img className="img" src={require('../../assets/devKavianBg.jpeg')} />
      </div>
    </div>
  )
}

export default TopImage;