import React from "react";

export const MovieControls = ({ movie, type }) => {
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye"> </i>
          </button>

          <button className="ctrl-btn">
            <i className="fa-fw fa fa-times"> </i>
          </button>
        </>
      )}
    </div>
  );
};
