import {AnimationActionTypes} from './animation.types';

const INITAL_STATE = {
  speechBubbleIsActive: null,
  speechBubbleIsActiveComp: null,
  
  //below is for CHARACTER
  characterIsActive: null,
  characterDirection: 'right',
  characterLeft: -50,

  characterIsActiveComp: null,
  characterLeftComp: 0,
  characterDirectionComp: 'left',
}

const animationReducer = (state = INITAL_STATE , action) => {
  switch (action.type){
    case AnimationActionTypes.SET_CHARACTER_POSITION_LEFT:
      return{
        ...state,
        characterLeft: action.payload
      }
    case AnimationActionTypes.END_SPEECH_BUBBLE_ANIMATION:
      console.log('///####')
      return {
        ...state,
        speechBubbleIsActive: action.payload        
      }
    case AnimationActionTypes.START_SPEECH_BUBBLE_ANIMATION:
      console.log('///@@@@@')
      return{
        ...state,
        speechBubbleIsActive: action.payload
      }
    case AnimationActionTypes.START_SPEECH_BUBBLE_ANIMATION_COMP:
      console.log('@@??')
      return{
        ...state,
        speechBubbleIsActiveComp: true
      }
    case AnimationActionTypes.END_SPEECH_BUBBLE_ANIMATION_COMP:
      console.log('@@###')
      return{
        ...state,
        speechBubbleIsActiveComp:  null
      }
    case AnimationActionTypes.SET_CHARACTER_DIRECTION_ANIMATION:
      return{
        ...state,
        characterDirection: action.payload
      }
    case AnimationActionTypes.START_CHARACTER_ANIMATION:
      return{
        ...state,
        characterIsActive: action.payload
      }
    case AnimationActionTypes.END_CHARACTER_ANIMATION:
      return{
        ...state,
        characterIsActive: null
      }
    case AnimationActionTypes.START_CHAR_ANIM_COMP:
      return{
        ...state,
        characterIsActiveComp: true
      }
    case AnimationActionTypes.END_CHAR_ANIM_COMP:
      return{
        ...state,
        characterIsActiveComp: null
      }
    case AnimationActionTypes.SET_CHAR_POS_LEFT_COMP:
      return{
        ...state,
        characterLeftComp: action.payload
      }
    case AnimationActionTypes.SET_CHAR_DIRECTION_COPM:
      return {
        ...state,
        characterDirectionComp: action.payload
      }
    default:
      return state
  }
}

export default animationReducer;