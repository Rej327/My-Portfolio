import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
import { RiSendPlaneLine } from "react-icons/ri";
import { buttonStyle, headings, sub_headings } from "../styles/styles";
import { GET_IN_TOUCH } from "../data/data";

const Contactinput = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40mptef",
        "template_r4fadpr",
        e.target,
        "FSbjMbFNlJOLGuiuP"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="max-w-[1100px] mx-auto my-28 ">
      <h1 className={`text-center ${headings.header}`}>CONTACT ME</h1>
      <div className="mt-16 lg:flex justify-center">
        <div className="lg:max-w-[320px] px-4">
          <h1 className={sub_headings.sub_head}>My Address</h1>
          <p className="text-gray-600 pb-3 flex text-sm">
            <ImLocation className="text-4xl my-auto pr-2" />
            <a
              href="https://www.google.com/maps/place/P.+Burgos+St,+Catanauan,+Quezon/@13.5944228,122.3192731,17z/data=!3m1!4b1!4m5!3m4!1s0x33a2f8280dc468ad:0x743213e02f6cceb2!8m2!3d13.5944228!4d122.3214618"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Brgy. Poblacion 04 Catanuan, Quezon Philippines (4311)
            </a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <BsFillTelephoneInboundFill className="text-3xl my-auto pr-2" />
            <a href="tel:09502433069">+63-950-243-3069</a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <FaFacebookF className="text-2xl my-auto pr-2 ml-1" />
            <a
              href="https://www.facebook.com/resujeff27"
              target="_blank"
              rel="noreferrer"
            >
              Facebook{" "}
            </a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <AiFillLinkedin className="text-3xl my-auto pr-2" />
            <a
              href="https://www.linkedin.com/in/jefferson-resurreccion-9279391b7/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <SiIndeed className="text-3xl my-auto pr-2" />
            <a
              href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage"
              target="_blank"
              rel="noreferrer"
            >
              Indeed
            </a>
          </p>
        </div>
        <div className="h-auto w-auto mx-5 ">
          <h1 className={sub_headings.sub_head}>{GET_IN_TOUCH.get_in_touch}</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 lg:flex gap-2 w-full">
              <div className="input-group w-full">
                <input
                  type="text"
                  name="name"
                  required
                  className="input w-full"
                />
                <label class="user-label">Name</label>
              </div>
              <div className="input-group w-full">
                <input
                  type="text"
                  name="email"
                  required
                  className="input w-full"
                />
                <label class="user-label">Email</label>
              </div>
            </div>
            <div className="input-group h-auto w-full mt-4">
              <textarea
                type="text"
                name="message"
                required
                className="input w-full"
              />
              <label class="user-label">Message</label>
            </div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center ${buttonStyle.button}`}
            >
              Send
              <RiSendPlaneLine className="my-auto ml-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactinput;
