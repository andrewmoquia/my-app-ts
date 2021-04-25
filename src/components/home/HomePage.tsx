import React from 'react'
import { IAction, IEpisode, IEpisodeProps } from "../../container/interfaces"
import { Store } from "../store/Store"

const EpisodeList = React.lazy<any>(() => import("../episodeList/EpisodeList"));

export default function HomePage() {

    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
    });

    const fetchDataAction = async () => {
      const URL =
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
      const data = await fetch(URL);
      const dataJSON = await data.json();
      return dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes,
      })
    }

    const toogleFavoriteAction = (episode: IEpisode): IAction => {
      const episodeInFav = state.favorites.includes(episode);
      let dispatchObj = {
        type: "ADD_FAVORITE",
        payload: episode,
      }
      if (episodeInFav) {
        const favWithouthEpisode = state.favorites.filter(
          (fav: IEpisode) => fav.id !== episode.id
        );
        dispatchObj = {
          type: "REMOVE_FAVORITE",
          payload: favWithouthEpisode,
        };
      }
      return dispatch(dispatchObj);
    }

    const props: IEpisodeProps = {
        state: state,
        toogleFavoriteAction,
    }

    return (
      <React.Fragment>
        <React.Suspense
          fallback={
            <div id="loading-layout">
              <h1>Loading....</h1>.
            </div>
          }
        >
          <article id="episodes-layout">
            <EpisodeList {...props} />
          </article>
        </React.Suspense>
      </React.Fragment>
    );
}
