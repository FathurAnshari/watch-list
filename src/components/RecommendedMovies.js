import React, { useState, useEffect } from "react";

import { ResultsCard } from "../UI/ResultsCard";

export const RecommendedMovies = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=950ee0b0d8d5aa5b45c502b3404f7e4a&language=en-US&page=1`
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
      <div className="container-nowplaying">
        <div>
          <h1 className="heading-popular">Now Playing Movie</h1>
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
