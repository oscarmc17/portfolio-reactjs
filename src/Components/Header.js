import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center main-text">Hey, it's Oscar Caicedo!</h1>
      <h3 className="text-center main-paragraph">
        I am a front-end web developer and designer currently based in
        Chicago, Illinois.
      </h3>
      <a className="main-btn" href="#project">
        View Projects
      </a>
    </div>
  );
};
export default Header;
