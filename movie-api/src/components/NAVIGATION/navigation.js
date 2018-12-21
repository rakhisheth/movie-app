import React from "react";
import Title from "../TITLE/title";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <Title title="MOVIES" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
