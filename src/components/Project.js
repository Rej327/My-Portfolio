import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { PROJECT } from "../data/data";
import { buttonStyle, headings, sub_headings } from "../styles/styles";

const Project = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="750"
      className="mx-auto text-center"
    >
      <h1 className={headings.header}>MY PROJECT</h1>
      <div className="sm:flex justify-between mt-10 mx-auto w-fit">
        {PROJECT.map((proj) => (
          <div className="max-w-[25rem] p-4">
            <h1 className={sub_headings.sub_head}>{proj.type}</h1>
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
            <div className="w-fit mx-auto mt-2">
              <a href={proj.codeLink} target="_blank" rel="noreferrer">
                <button className={`flex items-center ${buttonStyle.button}`}>
                  {proj.code}
                  <BsCodeSlash className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
