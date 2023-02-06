import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { social_icon } from "../styles/styles";
import { Links } from "../data/data";

const Social = () => {
  return (
    <div className="flex justify-between items-center w-24 sm:w-48">
      <a href={Links.github} target="_blank" rel="noreferrer">
        <AiFillGithub className={social_icon.style} />
      </a>
      <a href={Links.facebook} target="_blank" rel="noreferrer">
        <FaFacebookF className={social_icon.style} />
      </a>
      <a href={Links.linkedin} target="_blank" rel="noreferrer">
        <AiFillLinkedin className={social_icon.style} />
      </a>
      <a href={Links.indeed} target="_blank" rel="noreferrer">
        <SiIndeed className={social_icon.style} />
      </a>
      <a href={Links.tel}>
        <BsFillTelephoneInboundFill className={social_icon.style} />
      </a>
    </div>
  );
};

export default Social;
