import React from "react";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <div className="p-3 text-center contact-wrapper d-flex justify-content align-items-center flex-column">
      <h3 className="footer-text pt-4 pb-4" style={{color: "white"}}>For any inquiries, questions, or comments please contact me below!</h3>
      <a className="contact-btn pb-44" href="mailto:oscarccd17@gmail.com">
        Contact Me
      </a>
      <SocialIcons />
      <p className="copyright" style={{color: "white", fontFamily: "lato"}}>Oscar Caicedo - 2021</p>
    </div>
  );
}
