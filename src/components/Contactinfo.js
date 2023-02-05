import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { contactaddress, sub_headings } from "../styles/styles";

const Contactinfo = () => {
  return (
    <div className={contactaddress.main}>
      <div className={contactaddress.container}>
        <h1 className={sub_headings.sub_head}>My Address</h1>
        <p className={contactaddress.icon_label}>
          <ImLocation className={contactaddress.icon} />
          <a
            href="https://www.google.com/maps/place/P.+Burgos+St,+Catanauan,+Quezon/@13.5944228,122.3192731,17z/data=!3m1!4b1!4m5!3m4!1s0x33a2f8280dc468ad:0x743213e02f6cceb2!8m2!3d13.5944228!4d122.3214618"
            target="_blank"
            rel="noreferrer"
          >
            Brgy. Poblacion 04 Catanuan, Quezon Philippines (4311)
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <BsFillTelephoneInboundFill className={contactaddress.icon} />
          <a href="tel:09502433069">+63-950-243-3069</a>
        </p>
        <p className={contactaddress.icon_label}>
          <FaFacebookF className={contactaddress.icon} />
          <a
            href="https://www.facebook.com/resujeff27"
            target="_blank"
            rel="noreferrer"
          >
            Facebook{" "}
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <AiFillLinkedin className={contactaddress.icon} />
          <a
            href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
        <p className={contactaddress.icon_label}>
          <SiIndeed className={contactaddress.icon} />
          <a
            href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage"
            target="_blank"
            rel="noreferrer"
          >
            Indeed
          </a>
        </p>

        <p className={contactaddress.icon_label}>
          <AiFillGithub className={contactaddress.icon} />
          <a href="https://github.com/Rej327" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contactinfo;
