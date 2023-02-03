import React from "react";
import Webprofile from "../components/Webprofile";
import Aboutme from "../section/Aboutme";
import Myproject from "../section/Myproject";
import Profile from "../section/Profile";
import Technology from "../section/Technology";

const Home = () => {
  return (
    <div>
      <Webprofile />
      <div className="md:px-20">
        <Profile />
        <Aboutme />
        <Technology />
        <Myproject />
      </div>
    </div>
  );
};

export default Home;
