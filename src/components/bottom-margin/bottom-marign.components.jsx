import React from 'react';
import './bottom-margin.styles.scss';

const BottomMargin = ({children,open,height,padding}) => {
  return(
    <>
    <div 
      className={` ${open === 'open' ? null : "bottom-margin-wrapper " + open }`} 
    >
      <div className="clip-background-color-bottom">
        <div className={`path-clip-border-bottom ${open}`}>
          <div className={`path-clip-bottom ${open}`}></div>
        </div>
      </div>

      <div className="bottom-margin-two" style={{
        height: `${height ? height : 100}px`,
        padding: `${ padding ? padding : null}px`
      }}>
        {children}
      </div>
    </div>
    </>
  )
}   

export default BottomMargin