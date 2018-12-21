import React from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";

const UpcomingBtn = props => {
  return (
    <div>
      <NavLink to="/upcoming">
        <Buttons value={props.value} name="UPCOMING" />
      </NavLink>
    </div>
  );
};

export default UpcomingBtn;
