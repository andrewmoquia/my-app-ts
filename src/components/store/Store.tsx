import React from 'react'

const inititalState = {}

export const Store = React.createContext(inititalState);

function reducer() {

}

export function StoreProvider(props: any): JSX.Element {
    return <Store.Provider value='test'>{props.children}</Store.Provider> //value is passed through every component
}
