import { combineReducers } from 'redux'
import { TStore, TAction } from 'types/redux'

import homeReducer from './home/ducks'

const appReducer = combineReducers<TStore | undefined, TAction>({
  homeReducer,
})

const rootReducer = (state: TStore, action: TAction) => {
  if (action.type === 'APP/RESET') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer