import React, {Fragment} from 'react'
import "./App.scss"
import { Store } from "../store/Store"
import { Link } from "@reach/router"

function App(props: any) {

  const {state} = React.useContext(Store)

  return (
    <Fragment>
      <header id="header">
        <nav id="links">
          <Link to="/">Home</Link>
          <Link to="/faves">My Favorites: {state.favorites.length}</Link>
        </nav>
        <section id="header-description">
          <h1>Rick and Morty!</h1>
          <p>Pick your favorite episode!</p>
        </section>
      </header>
      <hr />
      {props.children}
    </Fragment>
  );
}

export default App;
