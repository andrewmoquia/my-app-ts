import React from "react";
import { IEpisodeProps } from "../../container/interfaces";
import { Store } from "../store/Store";
import { fetchDataAction, toogleFavoriteAction } from "../actions/Actions";

const EpisodeList = React.lazy<any>( () => import("../episodeList/EpisodeList") );

export default function HomePage() {
  
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favorites: state.episodes,
    store: { state, dispatch },
    toogleFavoriteAction
  };

  return (
    <React.Fragment>
      <React.Suspense
        fallback={
          <div id="loading-layout">
            <h1>Loading....</h1>
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
