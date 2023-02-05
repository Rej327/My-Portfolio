import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { RiSendPlaneLine } from "react-icons/ri";
import { buttonStyle, contactinput, sub_headings } from "../styles/styles";
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
    <div className={contactinput.main}>
      <div className={contactinput.container}>
        <h1 className={sub_headings.sub_head}>{GET_IN_TOUCH.get_in_touch}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className={contactinput.formDiv}>
            <div className={contactinput.inputDiv}>
              <input
                type="text"
                name="name"
                required
                className={contactinput.input}
              />
              <label className={contactinput.label}>Name</label>
            </div>
            <div className={contactinput.inputDiv}>
              <input
                type="text"
                name="email"
                required
                className={contactinput.input}
              />
              <label className={contactinput.label}>Email</label>
            </div>
          </div>
          <div className="input-group h-auto w-full mt-4">
            <textarea
              type="text"
              name="message"
              required
              className="input w-full h-40"
            />
            <label class={contactinput.label}>Message</label>
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
