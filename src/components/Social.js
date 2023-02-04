import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

const Social = () => {
  return (
    <div className="flex justify-between items-center w-24 sm:w-48">
      <a
        href="https://www.facebook.com/resujeff27"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="text-gray-700 hover:-translate-y-2 duration-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="text-gray-700 hover:-translate-y-2 duration-500" />
      </a>
      <a
        href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage"
        target="_blank"
        rel="noreferrer"
      >
        <SiIndeed className="text-gray-700 hover:-translate-y-2 duration-500" />
      </a>
      <a href="tel:09502433069">
        <BsFillTelephoneInboundFill className="text-gray-700 hover:-translate-y-2 duration-500" />
      </a>
    </div>
  );
};

export default Social;
