import { IAction, IEpisode, IState } from "../../container/interfaces";

export const fetchDataAction = async (dispatch: any) => { 
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toogleFavoriteAction = (episode: IEpisode | any, dispatch: any, state: IState): IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAVORITE",
    payload: episode,
  };    
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
};
