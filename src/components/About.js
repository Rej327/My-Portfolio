import React from "react";
import { ABOUT_ME } from "../data/data";
import { buttonStyle } from "../styles/styles";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="mx-auto mt-10 md:mt-0 text-center md:text-left md:mr-auto w-80">
      <h1 className="text-5xl opacity-50 md:mt-[75px]">{ABOUT_ME.head}</h1>
      <p className="text-xl md:mt-10 my-4 md:my-0">{ABOUT_ME.context}</p>
      <button className={buttonStyle.button}>{ABOUT_ME.button}</button>
    </div>
  );
};

export default About;
