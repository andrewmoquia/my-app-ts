import React, { Fragment, Suspense } from 'react'
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
    toogleFavoriteAction
  };

  return (
    <Fragment>
      <Suspense
        fallback={
          <div id="loading-layout">
            <h1>Loading....</h1>.
            </div>
        }
      >
        <article id="favorites-layout">
          <EpisodeList {...props} />
        </article>
      </Suspense>
    </Fragment>
  );
}
