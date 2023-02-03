import React from "react";
import { ABOUT_ME } from "../data/data";
import { buttonStyle, headings } from "../styles/styles";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="mx-auto mt-10 md:mt-0 text-center md:text-left md:mr-auto w-80">
      <h1 className={headings.header}>{ABOUT_ME.head}</h1>
      <p className="text-xl md:mt-10 my-4 md:my-0">{ABOUT_ME.context}</p>
      <button className={buttonStyle.button}>{ABOUT_ME.button}</button>
    </div>
  );
};

export default About;
