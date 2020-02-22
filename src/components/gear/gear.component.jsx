import React from 'react';
import './gear.styles.scss';
import gearSVG from '../../animations/svgs/gear.svg';
import gear2SVG from '../../animations/svgs/gear2.svg';

const Gear = () => {
  return(
    <>
      <div tabIndex="-1" className="gear-holder">
        <div tabIndex="-1" className="gear-holder-left">
          <img tabIndex="-1" className="left-gear" width="50"  alt="gear" src={gear2SVG} />
        </div>
        <div  tabIndex="-1"className="gear-holder-middle">
          <div  tabIndex="-1" className="middle-gear-wrapper">    
            <img tabIndex="-1" className="middle-gear"   alt="gear" src={gearSVG} />
            <img tabIndex="-1" className="small-middle-gear" width="50"  alt="gear" src={gear2SVG} />
            <img tabIndex="-1" className="smaller-middle-gear" width="50"  alt="gear" src={gear2SVG} />
          </div>
        </div>
        <div tabIndex="-1" className="gear-holder-right">
          <img tabIndex="-1" className="right-gear" width="50"  alt="gear" src={gear2SVG} />
        </div>
      </div>
    </>
  )
}

export default Gear