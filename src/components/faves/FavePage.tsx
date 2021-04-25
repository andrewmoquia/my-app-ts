import React from 'react'
import { Store } from "../store/Store";
import { IEpisodeProps } from "../../container/interfaces";
import { toogleFavoriteAction } from "../actions/Actions";

const EpisodeList = React.lazy<any>(() => import("../episodeList/EpisodeList"));

export default function FavePage() {

    const { state, dispatch } = React.useContext(Store);

    const props: IEpisodeProps = {
      episodes: state.favorites,
      favorites: state.favorites,
      store: { state, dispatch },
      toogleFavoriteAction,
    };

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
