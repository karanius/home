import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';


function DaImg({alt, src, viewPort, cardTopPosition}) {
  

  
  

  return (
    <>
    {
      (viewPort >= (cardTopPosition - 50) )  ?
        <img alt={alt} src={ src } />   : 
        null
    }
     
    </>
  )
}

export default DaImg;