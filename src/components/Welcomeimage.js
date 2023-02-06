import React from "react";
import { Links } from "../data/data";
import { heroImg } from "../styles/styles";

const Welcomeimage = () => {
  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="750">
      <img
        src={Links.hiGif}
        alt="Jefferson Resurreccion"
        className={heroImg.img}
      />
      <div className="flex mt-2">
        <div className={heroImg.line}></div>
        <p className={heroImg.position}>Front End Developer</p>
      </div>
    </div>
  );
};

export default Welcomeimage;
