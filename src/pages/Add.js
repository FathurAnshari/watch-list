import React, { useState } from "react";
import { RecommendedMovies } from "../components/RecommendedMovies";

import { ResultsCard } from "../UI/ResultsCard";

export const Add = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setIsTyping(true);

    const enteredInput = event.target.value;

    setQuery(enteredInput);
    setFocus(true);

    if (enteredInput.length === 0) {
      setFocus(false);
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=950ee0b0d8d5aa5b45c502b3404f7e4a&language=en-US&page=1&include_adult=false&query=${enteredInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          setIsTyping(false);
        } else {
          setResults([]);
        }
      });
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
            />
          </div>

          {!focus && <RecommendedMovies />}

          {results.length === 0 && !isTyping && (
            <h1 className="no-movies">No movies that you are looking for!</h1>
          )}

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
