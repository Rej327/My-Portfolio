import React from "react";
import { about } from "../assets";

const AboutImg = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="750"
      className=" max-w-[405px] mx-auto lg:mx-0"
    >
      <img
        src={about}
        alt="About Me"
        className="w-[40rem] rounded-md mx-auto"
      />
    </div>
  );
};

export default AboutImg;
