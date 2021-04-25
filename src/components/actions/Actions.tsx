import { IAction, IEpisode, IState, Dispatch } from "../../container/interfaces";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toogleFavoriteAction = (episode: IEpisode, dispatch: Dispatch, state: IState) => {
  const episodeInFav = state.favorites.includes(episode);
  const addFavEpisode = [...state.favorites, episode]
  const dispatchObj = {
    type: "ADD_FAVORITE",
    payload: addFavEpisode,
  };
  if (episodeInFav) {
    const favWithouthEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );

    return dispatch({
      type: "REMOVE_FAVORITE",
      payload: favWithouthEpisode,
    });
  }
  return dispatch(dispatchObj);
};
