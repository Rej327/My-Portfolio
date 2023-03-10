import React from "react";
import Tech from "../components/Tech";
import Globalspace from "../Global/Globalspace";
import { headings } from "../styles/styles";

const Technology = () => {
  return (
    <Globalspace>
      <div
        id="technology"
        className="text-center"
        data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-duration="750"
      >
        <h1 className={headings.header}>Technology</h1>
        <div>
          <Tech />
        </div>
      </div>
    </Globalspace>
  );
};

export default Technology;
