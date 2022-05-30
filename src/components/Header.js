import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={classes.main}>
        <div className={classes["inner-content"]}>
          <div className={classes.brand}>
            <Link to="/">WatchList</Link>
          </div>

          <ul className={classes.nav}>
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
