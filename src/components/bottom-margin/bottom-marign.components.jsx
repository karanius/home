import React from 'react';
import './bottom-margin.styles.scss';

const BottomMargin = ({children}) => {
  return(
    <>
      <div className="clip-background-color-bottom">
        <div className="path-clip-border-bottom">
          <div className="path-clip-bottom"></div>
        </div>
      </div>

        <div className="bottom-margin-two">
          {children}
        </div>


    </>
  )
}

export default BottomMargin