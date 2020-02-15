import {AnimationActionTypes} from './animation.types';

export const setCharacterPositionLeft = state => {
  return{
    type: AnimationActionTypes.SET_CHARACTER_POSITION_LEFT,
    payload: state
  }
}

export const endSpeechBubbleAnimation = state => {
  return {
    type: AnimationActionTypes.END_SPEECH_BUBBLE_ANIMATION,
    payload: state
  }
}

export const startSpeechBubbleAnimation = state => {
  return{
    type: AnimationActionTypes.START_SPEECH_BUBBLE_ANIMATION,
    payload: state
  }
}

export const setCharacterDirectionAnimation = state => {
  return{
    type: AnimationActionTypes.SET_CHARACTER_DIRECTION_ANIMATION,
    payload: state
  }
}

export const startCharacterAnimation = state => {
  return{
    type: AnimationActionTypes.START_CHARACTER_ANIMATION,
    payload: state
  }
}

export const endCharacterAnimation = state => {
  return{
    type: AnimationActionTypes.END_CHARACTER_ANIMATION,
    payload: state
  }
}

export const startCharAnimationComp = state => ({
  type: AnimationActionTypes.START_CHAR_ANIM_COMP,
  payload: state
})

export const endCharAnimationComp = state => ({
  type: AnimationActionTypes.END_CHAR_ANIM_COMP,
  payload: state
})

export const setCharacterPositionLeftComp = state => {
  return {
    type: AnimationActionTypes.SET_CHAR_POS_LEFT_COMP,
    payload: state
  }
}

export const setCharacterDirectionAnimationComp = state => {
  return{
    type: AnimationActionTypes.SET_CHAR_DIRECTION_COPM,
    payload: state
  }
}