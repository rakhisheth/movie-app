import React from "react";
import Title from "../TITLE/title";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <Title title="MOVIE LISTINGS" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
