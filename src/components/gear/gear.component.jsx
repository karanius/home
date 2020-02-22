import React from 'react';
import './gear.styles.scss';
import gearSVG from '../../animations/svgs/gear.svg';
import gear2SVG from '../../animations/svgs/gear2.svg';

const Gear = () => {
  return(
    <>
      <div className="gear-holder">
        <div className="gear-holder-left">
          <img className="left-gear" width="50"  alt="gear" src={gear2SVG} />
        </div>
        <div className="gear-holder-middle">
          <div className="middle-gear-wrapper">    
            <img className="middle-gear"   alt="gear" src={gearSVG} />
            <img className="small-middle-gear" width="50"  alt="gear" src={gear2SVG} />
            <img className="smaller-middle-gear" width="50"  alt="gear" src={gear2SVG} />
          </div>
        </div>
        <div className="gear-holder-right">
          <img className="right-gear" width="50"  alt="gear" src={gear2SVG} />
        </div>
      </div>
    </>
  )
}

export default Gear