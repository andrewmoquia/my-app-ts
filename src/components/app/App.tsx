import React from 'react'
import "./App.scss"
import {Store} from '../store/Store'
import { BookmarkHeart } from "react-bootstrap-icons";
interface IEpisode {
  airdate: string,
  airstamp: string,
  airtime: string,
  id: number,
  image: {medium: string, original: string},
  name: string,
  number: number,
  runtime: number,
  season: number,
  summary: string,
  type: string,
  url: string
}

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
              <div><button className="fav-button"><BookmarkHeart className="fav-icon"/></button><button>y</button></div>
            </section>
          );
        })}
      </article>
    </React.Fragment>
  );
}

export default App;
