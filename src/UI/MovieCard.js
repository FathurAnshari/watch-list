import React from "react";
import { useNavigate } from "react-router-dom";

import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <div className="overlay" onClick={onClickHandler} />
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
