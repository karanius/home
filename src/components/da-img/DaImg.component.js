import React,{useEffect,useState} from 'react';

function DaImg({alt, src, viewPort, cardTopPosition}) {

  const [srcImg, setSrcImg] = useState(null)
  const [done, setDone] = useState(false);

  useEffect(()=>{
    if( (!done) && ( cardTopPosition !== 0 && (viewPort >= ( cardTopPosition - 50) ))){
        setSrcImg(src)
        setDone(true)
      }
  },[viewPort, cardTopPosition])


  return (
    <>
      <img alt={alt} src={ srcImg } />
    </>
  )
}

export default DaImg;