import React from 'react';

function DaImg({alt, src, viewPort, cardTopPosition}) {


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