import React from "react";

const Globalcomp = ({ children, className }) => {
  return (
    <div
      className={`mx-auto my-5 flex flex-col md:flex-row justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default Globalcomp;
