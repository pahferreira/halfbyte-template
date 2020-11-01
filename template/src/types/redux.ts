import { TState as THomeState } from 'storage/home/models'

export type TAction = {
  type: string,
  payload: any
}

export type TStore = {
  homeReducer: THomeState
}