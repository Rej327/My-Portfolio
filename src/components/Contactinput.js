import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { RiSendPlaneLine } from "react-icons/ri";
import { buttonStyle, sub_headings } from "../styles/styles";
import { GET_IN_TOUCH } from "../data/data";

const Contactinput = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent success!");

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
    <div className="mx-auto w-full">
      <div className="h-auto w-auto mx-5 ">
        <h1 className={sub_headings.sub_head}>{GET_IN_TOUCH.get_in_touch}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 lg:flex gap-4 w-full">
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
  );
};

export default Contactinput;
