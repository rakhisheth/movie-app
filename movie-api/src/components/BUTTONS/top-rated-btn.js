import React from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";

const TopRatedBtn = () => {
  return (
    <div>
      <NavLink to="/top-rated">
        <Buttons name="TOP RATED" />
      </NavLink>
    </div>
  );
};

export default TopRatedBtn;
