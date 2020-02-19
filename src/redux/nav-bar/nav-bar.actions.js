import {NavbarActionTypes} from './nav-bar.types'

export const setDropNavStatus = state => {
  return {
    type: NavbarActionTypes.SET_DROPNAV_STATUS,
    payload: state
  }
}

export const openCloseDropNav = state => {
  return {
    type: NavbarActionTypes.DROP_NAV_IS_OPEN,
    payload: state
  }
}
