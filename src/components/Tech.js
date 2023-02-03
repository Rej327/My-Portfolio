import React from "react";
import "../index.css";
import { TECHNOLOGY } from "../data/data";

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {TECHNOLOGY.map((TECH) => (
        <div className="technology sm:w-40 mx-auto mt-10 grid grid-rows-1 justify-center items-center p-2">
          <img src={TECH.icon} alt="icon" className="w-12 md:w-24 mx-auto" />
          <h1 className="text-base sm:text-xl font-semibold">{TECH.skill}</h1>
        </div>
      ))}
    </div>
  );
};

export default Tech;