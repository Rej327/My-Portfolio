import React from "react";
import Social from "../components/Social";
import Webprofile from "../components/Webprofile";

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <Webprofile />
      <Social />
    </div>
  );
};

export default Navigation;
