import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { DetailCard } from "../UI/DetailCard";
import LoadingSpinner from "../UI/LoadingSpinner";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DetailPage = () => {
  const [result, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetching = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=950ee0b0d8d5aa5b45c502b3404f7e4a&language=en-US`
        );
        await sleep(500);
        if (!fetching.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await fetching.json();

        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    getMovie();
  }, [params.movieId]);

  console.log(result);

  if (result === undefined) {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return <h2 className="no-movies">{error}</h2>;
  }

  return <DetailCard movie={result} key={result.id} />;
};
