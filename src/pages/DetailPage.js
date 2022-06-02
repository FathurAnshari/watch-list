import React, { useState, useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { DetailCard } from "../UI/DetailCard";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const DetailPage = () => {
  const { watched, watchlist } = useContext(GlobalContext);

  const [result, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  let allList = [...watched, ...watchlist];

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      const current = allList.find((detail) => detail.id == params.movieId);
      if (current) {
        setResults(current);
      } else {
        const fetching = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        );
        await sleep(1000);
        const data = await fetching.json();

        if (!data.errors) {
          const newMovie = data.results.find(
            (detail) => detail.id == params.movieId
          );
          setResults(newMovie);
        } else {
          setResults([]);
        }
      }
      setIsLoading(false);
    };
    getMovie();
  }, []);

  console.log(result);

  if (result === undefined) {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return <div>No Movie</div>;
  }

  return <DetailCard movie={result} key={result.id} />;
};
