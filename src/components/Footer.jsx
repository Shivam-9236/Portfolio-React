import React from "react";
import dp from "../assets/dp2.jpg"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={dp}
          alt="Founder"
        />

        <h2>Shivam Gupta</h2>
        <p>Design is not decoration. It's communication.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://github.com/Shivam-9236" target={"blank"}>
            <AiFillGithub />
          </a>

          <a href="https://www.instagram.com/shivam_9236/" target={"blank"}>
            <AiFillInstagram />
          </a>

          <a href="https://www.linkedin.com/in/shivam-gupta-848578203/" target={"blank"}>
            <AiFillLinkedin />
          </a>

          <a href="mailto:shivamrdr6502@gmail.com" target={"blank"}>
            <AiOutlineMail />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;