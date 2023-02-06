import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";
import { mycv } from "../assets";
import { HERO, hi } from "../data/data";
import { buttonStyle, hero } from "../styles/styles";

const Welcome = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="750"
      className="max-w-[405px]"
    >
      <div className={hero.main}>
        <h1 className="text-8xl opacity-50">{HERO.hi}</h1>
        <img src={hi.img} alt="wave" className="w-20" />
      </div>
      <p className={hero.context}>
        I'm <strong>Jefferson Resurreccion</strong>
        {HERO.context}
      </p>
      <div className={hero.button}>
        <Link
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          <button className={buttonStyle.button}>{HERO.contact}</button>
        </Link>
        <a href={mycv} download={mycv} target="_blank" rel="noreferrer">
          <button
            className={`flex justify-center items-center ${buttonStyle.button}`}
          >
            {HERO.dl_cv}
            <AiOutlineDownload className="text-xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
