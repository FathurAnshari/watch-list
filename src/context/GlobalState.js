import React, { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial State
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContext = React.createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  // context value
  const contextValue = {
    watchlist: state.watchlist,
    watched: state.watched,
    addMovieToWatchList,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
