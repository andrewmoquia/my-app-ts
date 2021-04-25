export interface IState {
  episodes: Array<any>,
  favorites: Array<any>
}

export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string,
  payload: Array<IEpisode>
}

export interface IEpisode {
  airdate?: string,
  airstamp?: string,
  airtime?: string,
  id?: number,
  image?: { medium?: string; original?: string },
  name?: string,
  number?: number,
  runtime?: number,
  season?: number,
  summary?: string,
  type?: string,
  url?: string
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>,
  favorites: Array<IEpisode>,
  store: { state: IState; dispatch: Dispatch },
  toogleFavoriteAction: (
    episode: IEpisode,
    dispatch: Dispatch,
    state: IState
  ) => void
}
