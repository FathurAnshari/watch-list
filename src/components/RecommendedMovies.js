import React, { useState, useEffect } from "react";

import { ResultsCard } from "../UI/ResultsCard";

export const RecommendedMovies = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResult(data.results);
        } else {
          setResult([]);
        }
      });
  }, []);

  return (
    <div className="add-page">
      <div className="container">
        <div>
          <h1>Now Playing Movie</h1>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultsCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};