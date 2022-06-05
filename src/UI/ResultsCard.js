import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export const ResultsCard = ({ movie }) => {
  const navigate = useNavigate();
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

  const onDetailHandler = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div className="result-card">
      <div onClick={onDetailHandler} className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 onClick={onDetailHandler} className="title">
            {movie.title}
          </h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <button
            onClick={onClickHandler}
            disabled={watchlistDisabled}
            className="btn"
          >
            Add to Watchlist
          </button>
          <button
            onClick={onClickToWatched}
            disabled={watchedDisabled}
            className="btn"
          >
            Add movie to watched
          </button>
        </div>
      </div>
    </div>
  );
};
