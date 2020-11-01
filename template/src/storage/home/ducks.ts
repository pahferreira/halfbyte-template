import { TState } from './models'
import { TAction } from 'types/redux'

// ACTION TYPES
export const Types = {
  TRIGGER: 'HOME/TRIGGER',
  REQUEST: 'HOME/REQUEST',
  FAIL: 'ABOUT/FAIL',
  SUCCESS: 'HOME/SUCCESS',
  FULFILL: 'HOME/FULFILL',
}

// ACTIONS
export const trigger = () => {
  return {
    type: Types.TRIGGER,
  }
}

export const request = () => {
  return {
    type: Types.REQUEST,
  }
}

export const failed = (error: string) => {
  return {
    type: Types.FAIL,
    payload: error
  }
}


export const fulfill = () => {
  return {
    type: Types.FULFILL,
  }
}

export const success = (payload: any) => {
  return {
    type: Types.SUCCESS,
    payload,
  }
}

// INITIAL STATE
const initialState: TState = {
  loading: false,
  welcome: '',
}

// REDUCER
const homeReducer = (state: TState = initialState, action: TAction): TState => {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Types.FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case Types.FULFILL:
      return {
        ...state,
        loading: false,
      }
    case Types.SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default homeReducer