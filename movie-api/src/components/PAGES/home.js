import React from "react";
import TopRatedBtn from "../BUTTONS/top-rated-btn";
import UpcomingBtn from "../BUTTONS/upcoming-btn";

const Home = () => {
  return (
    <div>
      <p>CURRENT LISTINGS:</p> {/*INCLUDE API HERE*/}
      <TopRatedBtn />
      <UpcomingBtn />
    </div>
  );
};

export default Home;
