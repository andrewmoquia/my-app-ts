import { BookmarkHeart, BookmarkHeartFill } from "react-bootstrap-icons";
import { IEpisode } from "../../container/interfaces";

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { toogleFavoriteAction, store, episodes } = props;
  const {state, dispatch} = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image ? episode.image.medium : ""}
          alt={`Rick and Morty ${episode.name}`}
        />
        <p><b>{episode.name}</b></p>
        <p>Season: {episode.season} Episode: {episode.number}</p>
        <div>
          <button
            className="fav-button"
            type="button"
            onClick={() => toogleFavoriteAction(episode, dispatch, state)}
          >
            {state.favorites.includes(episode) 
            ? <BookmarkHeartFill className="fav-icon" fill={"red"} />
            : <BookmarkHeart className="fav-icon" />}
          </button>
        </div>
      </section>
    );
  });
}
