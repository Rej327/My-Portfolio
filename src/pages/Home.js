import React from "react";
import Webprofile from "../components/Webprofile";
import Aboutme from "../section/Aboutme";
import Profile from "../section/Profile";

const Home = () => {
  return (
    <div>
      <Webprofile />
      <div className="md:px-20">
        <Profile />
        <Aboutme />
      </div>
    </div>
  );
};

export default Home;
