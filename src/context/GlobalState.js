import React, { useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// get local data
const getLocalWatchlist = JSON.parse(localStorage.getItem("watchlist"));
const getLocalWatched = JSON.parse(localStorage.getItem("watched"));

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

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  // context value
  const contextValue = {
    watchlist: state.watchlist,
    watched: state.watched,
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
