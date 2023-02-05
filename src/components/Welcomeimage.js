import React from "react";
import { heroImg } from "../styles/styles";

const Welcomeimage = () => {
  return (
    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="750">
      <img
        src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/310011081_1987616491448369_212409990619689944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYfcJkUQbj4EsWUAcfjbQpUvuTtHXdX_pS-5O0dd1f-gOrSp8GYAvMNPszOQFFihAvSfzQAUfaiz9_ivbKqviM&_nc_ohc=brirM40R-ooAX9nuslh&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfDDjNxyoZClDxvjVXIUvaJt7AiH_TPXH0OKLKNfBRUpVQ&oe=63E0DFD3"
        alt="Jefferson Resurreccion"
        className={heroImg.img}
      />
      <div className="flex mt-2">
        <div className={heroImg.line}></div>
        <p className={heroImg.position}>Front End Developer</p>
      </div>
    </div>
  );
};

export default Welcomeimage;
