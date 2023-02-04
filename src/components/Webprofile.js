import React from "react";
import { HEAD } from "../data/data";

const Webprofile = () => {
  return (
    <div className="py-4 px-2">
      <h1 className="text-3xl text-gray-700 font-medium font-sans">
        {HEAD.head}
      </h1>
    </div>
  );
};

export default Webprofile;
