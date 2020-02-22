import React from 'react';
import './top-margin.styles.scss';

const TopMargin = ({children,noShine,height,open}) => {

  return (

    <>
      <div 
      tabIndex="-1" className={` top-wrapper ${open}`}
      >
        <div tabIndex="-1" className="top-margin-container" style={{
          height: `${height ? height : 100}px`
        }}>
          <div tabIndex="-1" className={`${noShine ? null : "top-margin-msg"}`}>
            {children}
          </div>
        </div>


        <div tabIndex="-1" className="clip-background-color">
          <div tabIndex="-1" className={`path-clip-border ${open}`}>
            <div tabIndex="-1" className={`path-clip ${open}`}></div>
          </div>
        </div>
    </div>
  </>


  )
}

export default TopMargin