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
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      const fetching = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=950ee0b0d8d5aa5b45c502b3404f7e4a&language=en-US`
      );
      await sleep(500);
      const data = await fetching.json();

      if (!data.errors) {
        setResults(data);
      } else {
        setResults([]);
      }
    };
    setIsLoading(false);

    getMovie();
  }, [params.movieId]);

  console.log(result);

  if (result === undefined) {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return <div>No Movie</div>;
  }

  return <DetailCard movie={result} key={result.id} />;
};
