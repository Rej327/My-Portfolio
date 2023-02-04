import React from "react";

const Globalcomp = ({ children, className }) => {
  return (
    <div
      className={`mx-auto flex flex-col lg:flex-row justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default Globalcomp;
