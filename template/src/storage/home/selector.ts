import { TState as THomeState } from './models'
import { TStore } from 'types/redux'

const homeSelector = (state: TStore): THomeState => state.homeReducer

export default homeSelector