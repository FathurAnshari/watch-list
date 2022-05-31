import React, { useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// get local data
const getLocalWatchlist = JSON.parse(localStorage.getItem("watchlist"));
const getLocalWatched = JSON.parse(localStorage.getItem("wathced"));

// initial State
const initialState = {
  watchlist: localStorage.getItem("watchlist") ? getLocalWatchlist : [],
  watched: localStorage.getItem("watched") ? getLocalWatched : [],
};

// create context
export const GlobalContext = React.createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  // context value
  const contextValue = {
    watchlist: state.watchlist,
    watched: state.watched,
    addMovieToWatchlist,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
