import React from "react";
import { about } from "../assets";

const AboutImg = () => {
  return (
    <div className=" max-w-[405px] border-2">
      <img src={about} alt="About Me" className="w-[40rem] rounded-md" />
    </div>
  );
};

export default AboutImg;
