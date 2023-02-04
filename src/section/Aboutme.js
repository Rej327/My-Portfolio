import React from "react";
import About from "../components/About";
import AboutImg from "../components/AboutImg";
import Globalcomp from "../Global/Globalcomp";
import Globalspace from "../Global/Globalspace";

const Aboutme = () => {
  return (
    <Globalspace>
      <Globalcomp>
        <AboutImg />
        <About />
      </Globalcomp>
    </Globalspace>
  );
};

export default Aboutme;
