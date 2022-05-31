import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  const onCLickWatchlistHandler = () => {
    removeMovieFromWatchlist(movie.id);
  };

  const onCLickWatchedHandler = () => {
    addMovieToWatched(movie);
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
    </div>
  );
};
