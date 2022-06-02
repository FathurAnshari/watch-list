import React, { useState } from "react";
import { RecommendedMovies } from "../components/RecommendedMovies";

import { ResultsCard } from "../UI/ResultsCard";

export const Add = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChangeHandler = (event) => {
    event.preventDefault();

    const enteredInput = event.target.value;

    setQuery(enteredInput);
    setFocus(true);

    if (enteredInput.length === 0) {
      setFocus(false);
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${enteredInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  const onBlurHandler = () => {
    setFocus(false);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </div>

          {!focus && <RecommendedMovies />}

          {results.length > 0 && focus && (
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
