import React from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";

const TopRatedBtn = props => {
  return (
    <div>
      <NavLink to="/top-rated">
        <Buttons value={props.value} name="TOP RATED" />
      </NavLink>
    </div>
  );
};

export default TopRatedBtn;
