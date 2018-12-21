import React from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";

const CurrentBtn = props => {
  return (
    <div>
      <NavLink to="/current">
        <Buttons value={props.value} name="CURRENT MOVIES" />
      </NavLink>
    </div>
  );
};

export default CurrentBtn;
