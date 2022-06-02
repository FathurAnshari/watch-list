import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  const onCLickWatchlistHandler = () => {
    removeMovieFromWatchlist(movie.id);
  };

  const onCLickWatchedHandler = () => {
    addMovieToWatched(movie);
  };

  const onCLickWatchedToWatchlist = () => {
    moveToWatchlist(movie);
  };

  const onClickRemoveFromWatch = () => {
    removeFromWatched(movie.id);
  };

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={onCLickWatchedHandler}>
            <i className="fa-fw far fa-eye"> </i>
          </button>

          <button className="ctrl-btn" onClick={onCLickWatchlistHandler}>
            <i className="fa-fw fa fa-times"> </i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={onCLickWatchedToWatchlist}>
            <i className="fa-fw far fa-eye-slash"> </i>
          </button>

          <button className="ctrl-btn" onClick={onClickRemoveFromWatch}>
            <i className="fa-fw fa fa-times"> </i>
          </button>
        </>
      )}
      {type === "popular" && (
        <div className="popular-ctrl-btn">
          <button
            className="ctrl-btn-popular"
            onClick={onCLickWatchedToWatchlist}
          >
            Add to Watchlist
          </button>

          <button className="ctrl-btn-popular" onClick={onCLickWatchedHandler}>
            Watched
          </button>
        </div>
      )}
    </div>
  );
};
