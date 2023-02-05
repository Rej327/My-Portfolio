import React from "react";
import "../index.css";
import { TECHNOLOGY } from "../data/data";
import { tech } from "../styles/styles";

const Tech = () => {
  return (
    <div className={tech.main}>
      {TECHNOLOGY.map((TECH) => (
        <div
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="750"
          className={tech.container}
        >
          <img src={TECH.icon} alt="icon" className="w-12 md:w-24 mx-auto" />
          <h1 className="text-base sm:text-xl font-medium">{TECH.skill}</h1>
        </div>
      ))}
    </div>
  );
};

export default Tech;
