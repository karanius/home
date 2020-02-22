import React from 'react';
import './top-margin.styles.scss';

const TopMargin = ({children,noShine,height,open}) => {

  return (

    <>

      <div className="top-margin-container" style={{
        height: `${height ? height : 100}px`
      }}>
        <div className={`${noShine ? null : "top-margin-msg"}`}>
          {children}
        </div>
      </div>


      <div className="clip-background-color">
        <div className={`path-clip-border ${open}`}>
          <div className={`path-clip ${open}`}></div>
        </div>
      </div>

  </>


  )
}

export default TopMargin