import React from "react";
import Social from "../components/Social";
import Webprofile from "../components/Webprofile";

const Navigation = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="750"
      className="flex justify-between"
    >
      <Webprofile />
      <Social />
    </div>
  );
};

export default Navigation;
