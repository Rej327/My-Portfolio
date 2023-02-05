import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { social_icon } from "../styles/styles";

const Social = () => {
  return (
    <div className="flex justify-between items-center w-24 sm:w-48">
      <a href="https://github.com/Rej327" target="_blank" rel="noreferrer">
        <AiFillGithub className={social_icon.style} />
      </a>
      <a
        href="https://www.facebook.com/resujeff27"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className={social_icon.style} />
      </a>
      <a
        href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className={social_icon.style} />
      </a>
      <a
        href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage"
        target="_blank"
        rel="noreferrer"
      >
        <SiIndeed className={social_icon.style} />
      </a>
      <a href="tel:09502433069">
        <BsFillTelephoneInboundFill className={social_icon.style} />
      </a>
    </div>
  );
};

export default Social;
