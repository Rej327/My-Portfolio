import React from "react";
import { PROJECT } from "../data/data";
import { headings } from "../styles/styles";

const Project = () => {
  return (
    <div className="mx-auto text-center my-20">
      <h1 className={headings.header}>MY PROJECT</h1>
      <div className="sm:flex justify-between my-10 mx-auto w-fit">
        {PROJECT.map((proj) => (
          <div className="max-w-[25rem] p-4">
            <h1 className="text-3xl py-2 opacity-50">{proj.type}</h1>
            <a href={proj.link} target="_blank" rel="noreferrer">
              <img
                src={proj.image}
                alt="website img"
                className="rounded-md hover:contrast-50 duration-500 cursor-pointer"
              />
            </a>
            <p className="mt-2">
              <a href={proj.link} target="_blank" rel="noreferrer">
                {proj.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
