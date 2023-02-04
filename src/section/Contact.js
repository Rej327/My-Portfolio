import React from "react";
import Contactinfo from "../components/Contactinfo";
import Contactinput from "../components/Contactinput";
import Globalcomp from "../Global/Globalcomp";
import Globalspace from "../Global/Globalspace";
import { headings } from "../styles/styles";

const Contact = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="750"
      id="contact-me"
    >
      <Globalspace>
        <h1 className={`text-center ${headings.header}`}>CONTACT</h1>
        <Globalcomp>
          <Contactinfo />
          <Contactinput />
        </Globalcomp>
      </Globalspace>
    </div>
  );
};

export default Contact;
