import React from 'react';
import './burger.styles.scss'

import {openCloseDropNav} from '../../redux/nav-bar/nav-bar.actions'
import {connect} from 'react-redux';

class Burger extends React.Component {

  dropLinkWillOpenClose = (e) => {
      if (this.props.dropNavIsOpen) {
        this.props.openCloseDropNav(false)
      } else {
        this.props.openCloseDropNav(true)
      }
  }

  componentDidMount(){
    document.querySelector('#burger-button').addEventListener('click', this.dropLinkWillOpenClose )
  }
  componentWillUnmount () {
    document.querySelector('#burger-button').removeEventListener('click', this.dropLinkWillOpenClose )
  }

  render(){
    return (
      <div id="burger-button" className="burger">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    )
  }
}


const mapStateToProps = ({navBar}) => {
  return{
    dropNavIsOpen: navBar.dropNavIsOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openCloseDropNav: state => dispatch(openCloseDropNav(state))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Burger);