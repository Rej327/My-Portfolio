import React from "react";

const Globalcomp = ({ children, className }) => {
  return (
    <div
      className={`mx-auto my-24 mb-36 flex flex-col md:flex-row justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default Globalcomp;
