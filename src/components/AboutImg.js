import React from "react";
import { about } from "../assets";
import { aboutsection } from "../styles/styles";

const AboutImg = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="750"
      className={aboutsection.divImg}
    >
      <img src={about} alt="About Me" className={aboutsection.img} />
    </div>
  );
};

export default AboutImg;
