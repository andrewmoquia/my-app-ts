import React from 'react'
import { act } from 'react-dom/test-utils';

interface IState {
    episodes: [],
    favorites: []
}

interface IAction {
    type: string,
    payload: any
}

const inititalState: IState = {
    episodes: [],
    favorites: []
}

export const Store = React.createContext<IState>(inititalState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
    return (
      <Store.Provider value={inititalState}>{props.children}</Store.Provider>
    ); //value is passed through every component
}
