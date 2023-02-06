import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { contactaddress, sub_headings } from "../styles/styles";
import { Links } from "../data/data";

const Contactinfo = () => {
  return (
    <div className={contactaddress.main}>
      <div className={contactaddress.container}>
        <h1 className={sub_headings.sub_head}>My Address</h1>
        <p className={contactaddress.icon_label}>
          <ImLocation className={contactaddress.icon} />
          <a href={Links.location} target="_blank" rel="noreferrer">
            Brgy. Poblacion 04 Catanuan, Quezon Philippines (4311)
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <BsFillTelephoneInboundFill className={contactaddress.icon} />
          <a href={Links.tel}>+63-950-243-3069</a>
        </p>
        <p className={contactaddress.icon_label}>
          <FaFacebookF className={contactaddress.icon} />
          <a href={Links.facebook} target="_blank" rel="noreferrer">
            Facebook{" "}
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <AiFillLinkedin className={contactaddress.icon} />
          <a href={Links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <SiIndeed className={contactaddress.icon} />
          <a href={Links.indeed} target="_blank" rel="noreferrer">
            Indeed
          </a>
        </p>

        <p className={contactaddress.icon_label}>
          <AiFillGithub className={contactaddress.icon} />
          <a href={Links.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contactinfo;
