import React from 'react'
import "./App.scss"
import {Store} from '../store/Store'

function App() {
  const store = React.useContext(Store)
  console.log(store)
  return (
    <React.Fragment>
      <h1>Rick and Morty!</h1>
      <p>Pick your favorite episode!</p>
    </React.Fragment>
  );
}

export default App;
