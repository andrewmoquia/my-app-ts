import React from 'react'
import "./App.scss"
import { Store } from "../store/Store";
import { IAction, IEpisode } from "../../container/interfaces"

const EpisodeList = React.lazy<any>( () => import("../episodeList/EpisodeList") )

function App() {

  const {state, dispatch} = React.useContext(Store)

  React.useEffect( () => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    })
  }

  const toogleFavoriteAction = (episode:IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAVORITE",
      payload: episode,
    }
    if (episodeInFav) {
      const favWithouthEpisode = state.favorites.filter( (fav: IEpisode) => fav.id !== episode.id)
      dispatchObj = {
        type: "REMOVE_FAVORITE",
        payload: favWithouthEpisode,
      };
    }
    return dispatch(dispatchObj)
  }
   
  const props = {
    state: state,
    toogleFavoriteAction
  }

  console.log(state)
  return (
    <React.Fragment>
      <section id="header">
        <h1>Rick and Morty!</h1>
        <h2>Pick your favorite episode!</h2>
        <br />
        <h2>My Favorites: {state.favorites.length}</h2>
      </section>
      <hr/>
      <React.Suspense fallback={<div id="loading-layout"><h1>Loading....</h1>.</div>}>
        <article id="episodes-layout">
          <EpisodeList {...props} />
        </article>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
