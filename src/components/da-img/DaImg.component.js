import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function DaImg({alt,src}) {
  return (
    <div >
      <LazyLoadImage
      alt={alt}
      src={src} // use normal <img> attributes as props
      height={270}
      width={270}
      effect="blur"
       />
    </div>
  )
}

export default DaImg;

{/* <img alt={`${title}-pic`} src={imageLink} /> */}