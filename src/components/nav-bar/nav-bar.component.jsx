import React from 'react';
import DropNav from '../drop-nav/drop-nav.component';
import Logo from '../logo/logo.component';
import Burger from '../burger/burger.component';
import NavLinks from '../nav-links/nav-links.component'
import './nav-bar.styles.scss'

import { setDropNavStatus,openCloseDropNav } from '../../redux/nav-bar/nav-bar.actions'
import {connect} from 'react-redux';

class NavBar extends React.Component {

  componentDidMount(){
    
    if (ResizeObserver) {
      const navBarElem = document.querySelector('#navHeighAnchor');
      const ro = new ResizeObserver(props => {  
        const navBarWidth = props["0"].contentRect.width;
        if (navBarWidth <= 600 ){
          this.props.setDropNavStatus(true)
        } else {
          this.props.setDropNavStatus(false)
          this.props.openCloseDropNav(false)
        }
      });
      // Only observe the second box
      ro.observe(navBarElem);
    } else {
      this.resizeNav()
      window.addEventListener('scroll' , this.resizeNav)
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll' , this.resizeNav)
  }

  resizeNav = () =>{
    const windowWidth = window.innerWidth;
    if (windowWidth <= 600 ){
      this.props.setDropNavStatus(true)
    } else {
      this.props.setDropNavStatus(false)
      this.props.openCloseDropNav(false)
    }
  }

  render(){
    const {dropLinkIsActive} = this.props;
    return(
      <div id='navHeighAnchor'>
        {
          dropLinkIsActive ? 
          (
            <>
              <div className="nav">
                <Logo/>
                <Burger />
              </div>
              <DropNav />
            </>
          )
          :
          (      
            <>
              <div className="nav">
                <Logo/>
                <NavLinks />
              </div>
            </>
          )
        }
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setDropNavStatus: state => dispatch(setDropNavStatus(state)),
    openCloseDropNav: state => dispatch(openCloseDropNav(state))
  }
}

const mapStateToProps = ({navBar}) => {
  return {
    dropLinkIsActive: navBar.dropLinkIsActive
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);