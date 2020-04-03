import React,{useEffect} from 'react';
import './top-image.styles.scss'

const TopImage = () => {

  useEffect(() => {
    const img = document.createElement('img');

    img.className="img";
    img.src= require('../../assets/devKavianBg.jpeg');
    document.querySelector('.picture-frame').appendChild(img)
  }, []);



  return(
    <div className="img-wrapper" >
      <div className="picture-frame" >
        {/* <img className="img" src={require('../../assets/devKavianBg.jpeg')} /> */}
      </div>
    </div>
  )
}

export default TopImage;