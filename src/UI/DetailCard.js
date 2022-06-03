import React, { useContext } from "react";

import classes from "./DetailCard.module.css";
import { GlobalContext } from "../context/GlobalState";

export const DetailCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  const storedMovie = watchlist.find((o) => o.id === movie.id);
  const storedWatchedMovie = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedWatchedMovie
    ? true
    : false;

  const watchedDisabled = storedWatchedMovie ? true : false;

  const onClickHandler = () => {
    addMovieToWatchlist(movie);
  };

  const onClickToWatched = () => {
    addMovieToWatched(movie);
  };

  return (
    <div className={classes.wrapper}>
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className={classes.info}>
        <div>
          <h3>{movie.title}</h3>
          <h4>{movie.release_date ? movie.release_date : "-"}</h4>
          <h5>{movie.overview}</h5>
        </div>

        <div className={classes.control}>
          <button onClick={onClickHandler} disabled={watchlistDisabled}>
            Add to Watchlist
          </button>
          <button onClick={onClickToWatched} disabled={watchedDisabled}>
            Add movie to watched
          </button>
        </div>
      </div>
    </div>
  );
};
