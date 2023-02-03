import React from "react";
import Tech from "../components/Tech";
import { headings } from "../styles/styles";

const Technology = () => {
  return (
    <div className="text-center sm:my-56">
      <h1 className={headings.header}>Technology</h1>
      <div>
        <Tech />
      </div>
    </div>
  );
};

export default Technology;
