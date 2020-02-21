import React from 'react';
import './top-margin.styles.scss';

const TopMargin = ({children}) => {
  return (

    <>

      <div className="top-margin-container">
        <p className="top-margin-msg">
          {children}
        </p>
      </div>


      <div className="clip-background-color">
        <div className="path-clip-border">
          <div className="path-clip"></div>
        </div>
      </div>

  </>


  )
}

export default TopMargin