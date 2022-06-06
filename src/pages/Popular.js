import React, { useState, useEffect } from "react";
import { MovieCard } from "../UI/MovieCard";

export const Popular = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=950ee0b0d8d5aa5b45c502b3404f7e4a&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, []);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading-popular">Popular Movies</h1>
        </div>

        {results.length > 0 ? (
          <div className="movie-grid">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="popular" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Popular Movies</h2>
        )}
      </div>
    </div>
  );
};
