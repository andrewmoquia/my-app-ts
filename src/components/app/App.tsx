import React from 'react'
import "./App.scss"
import { Store } from "../store/Store";
import { BookmarkHeart, BookmarkHeartFill } from "react-bootstrap-icons";
import { IAction, IEpisode } from "../../container/interfaces";


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
   
  console.log(state)
  return (
    <React.Fragment>
      <h1>Rick and Morty!</h1>
      <p>Pick your favorite episode!</p>
      <article id="episodes-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image ? episode.image.medium : ""}
                alt={`Rick and Morty ${episode.name}`}
              />
              <p>
                <b>{episode.name}</b>
              </p>
              <p>
                Season: {episode.season} Episode: {episode.number}
              </p>
              <div>
                <button
                  className="fav-button"
                  type="button"
                  onClick={() => toogleFavoriteAction(episode)}
                >
                  {
                    state.favorites.includes(episode) 
                      ? <BookmarkHeartFill className="fav-icon"  />
                      : <BookmarkHeart className="fav-icon" />
                  }
                </button>
              </div>
            </section>
          );
        })}
      </article>
    </React.Fragment>
  );
}

export default App;
