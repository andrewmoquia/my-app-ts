import React from 'react'

interface IState {
    episodes: [],
    favorites: []
}

const inititalState: IState = {
    episodes: [],
    favorites: []
}

export const Store = React.createContext<IState>(inititalState);

function reducer() {

}

export function StoreProvider(props: any): JSX.Element {
    return (
      <Store.Provider value={inititalState}>{props.children}</Store.Provider>
    ); //value is passed through every component
}
