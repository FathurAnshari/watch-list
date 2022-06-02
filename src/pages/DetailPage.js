import React, { useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { ResultsCard } from "../UI/ResultsCard";

export const DetailPage = () => {
  const { watched, watchlist } = useContext(GlobalContext);

  const [results, setResults] = useState([]);
  const params = useParams();

  let allList = [...watched, ...watchlist];

  const result = allList.find((detail) => detail.id == params.movieId);
  console.log(result);

  return <ResultsCard movie={result} key={result.id} />;
};
