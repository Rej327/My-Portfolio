import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";
import { HERO } from "../data/data";
import { buttonStyle } from "../styles/styles";

const Welcome = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="750"
      className="max-w-[405px]"
    >
      <div className="my-2 flex items-end">
        <h1 className="text-8xl opacity-50">{HERO.hi}</h1>
        <img
          src="https://em-content.zobj.net/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
          alt="wave"
          className="w-20"
        />
      </div>
      <p className="text-xl py-2 text-justify max-w-[400px]">
        I'm <strong>Jefferson Resurreccion</strong>
        {HERO.context}
      </p>
      <div className="w-fit mx-auto md:mx-0 flex">
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
        <button
          className={`flex justify-center items-center ${buttonStyle.button}`}
        >
          {HERO.dl_cv}
          <AiOutlineDownload className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
