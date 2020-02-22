import React from 'react';
import './burger.styles.scss'

import {openCloseDropNav} from '../../redux/nav-bar/nav-bar.actions'
import {connect} from 'react-redux';

class Burger extends React.Component {

  dropLinkWillOpenClose = (e) => {
      if (this.props.dropNavIsOpen) {
        this.props.openCloseDropNav(false)
        document.querySelector('#burger-button').setAttribute('aria-expanded', 'false')
      } else {
        this.props.openCloseDropNav(true)
        document.querySelector('#burger-button').setAttribute('aria-expanded', 'true')
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
      <button tabIndex='0' aria-label="navigation menu" aria-expanded='false' id="burger-button" className="burger">
        <div className={`burger-line top-line ${this.props.dropNavIsOpen ? "open" : null}`}></div>
        <div className={`burger-line mid-line ${this.props.dropNavIsOpen ? "open" : null}`}></div>
        <div className={`burger-line bottom-line ${this.props.dropNavIsOpen ? "open" : null}`}></div>
      </button>
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