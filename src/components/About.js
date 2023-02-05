import React from "react";
import { ABOUT_ME } from "../data/data";
import { aboutsection, buttonStyle } from "../styles/styles";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="750"
      className={aboutsection.div}
    >
      <h1 className={aboutsection.h1}>{ABOUT_ME.head}</h1>
      <p className={aboutsection.p}>{ABOUT_ME.context}</p>
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
