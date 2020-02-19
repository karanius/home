import {NavbarActionTypes} from './nav-bar.types'

const INITIAL_STATE = {
  dropLinkIsActive: false,
  dropNavIsOpen: false,
}


const navBarReducer = (state=INITIAL_STATE , action) => {
  switch (action.type){
    case NavbarActionTypes.SET_DROPNAV_STATUS:
      return{
        ...state,
        dropLinkIsActive: action.payload
      }
    case NavbarActionTypes.DROP_NAV_IS_OPEN:
      return{
        ...state,
        dropNavIsOpen: action.payload
      }
    default:
      return state
  }
}


export default navBarReducer