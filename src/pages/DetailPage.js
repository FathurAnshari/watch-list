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
  const params = useParams();

  let allList = [...watched, ...watchlist];

  useEffect(() => {
    const getMovie = async () => {
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
    };
    getMovie();
  }, []);

  console.log(result);

  if (result === undefined) {
    return <div>Loading....</div>;
  }

  return <DetailCard movie={result} key={result.id} />;
};
