import React, { useState, useEffect } from "react";
import { ResultsCard } from "../UI/ResultsCard";

export const Popular = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
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
    <div className="add-page">
      <div className="container">
        <div className="header-popular">
          <h1 className="heading">Popular Movies</h1>
        </div>
        <div className="add-content-popular">
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
