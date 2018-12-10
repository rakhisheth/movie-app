import React from "react";
import Buttons from "./buttons";
import { NavLink } from "react-router-dom";

const UpcomingBtn = () => {
  return (
    <div>
      <NavLink to="/upcoming">
        <Buttons name="UPCOMING" />
      </NavLink>
    </div>
  );
};

export default UpcomingBtn;
