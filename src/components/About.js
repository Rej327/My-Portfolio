import React from "react";
import { ABOUT_ME } from "../data/data";
import { buttonStyle } from "../styles/styles";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="750"
      className="mx-auto mt-10 md:mt-0 text-center sm:text-left md:mr-auto w-80"
    >
      <h1 className="text-5xl opacity-50 md:mt-[75px]">{ABOUT_ME.head}</h1>
      <p className="text-xl md:mt-10 my-4 md:my-0">{ABOUT_ME.context}</p>
      <Link
        activeClass="active"
        to="technology"
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
      >
        <button className={buttonStyle.button}>{ABOUT_ME.button}</button>
      </Link>
    </div>
  );
};

export default About;
