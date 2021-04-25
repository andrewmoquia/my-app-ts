import React from 'react'
import { IAction, IState } from '../../container/interfaces'

const inititalState: IState = {
  episodes: [],
  favorites: []
}

export const Store = React.createContext<IState | any>(inititalState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload }
    case "ADD_FAVORITE":
      return { ...state, favorites: [...action.payload] }
    case "REMOVE_FAVORITE":
      return { ...state, favorites: [...action.payload] }
    default:
      return state;
  }
}

export function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, inititalState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  ); //value is passed through every component
}
