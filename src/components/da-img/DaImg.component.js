import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';


function DaImg({alt, src, viewPort, cardTopPosition}) {
  

  // console.log(viewPort,cardTopPosition)
  

  // const elem = document.querySelector('.portfolio-container');
  // this.setState({viewPort: elem.offsetHeight + elem.scrollTop })




  return (
    <>
    {
      ( cardTopPosition !== 0 && (viewPort >= ( cardTopPosition - 50) ))  ?
        <img alt={alt} src={ src } />   : 
        null
    }
     
    </>
  )
}

export default DaImg;