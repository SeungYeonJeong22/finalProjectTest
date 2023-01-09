import React from "react";
import "./main_css/test_main.module.css";

const Header = (e) => {
  return (
    <div className="header">
      <div className="burger-wrapper">
        <div className="burger"></div>
      </div>
      <div className="logo-text">Listeners Playlist</div>
      <div className="back_btn">
        <div className="circle"></div>
        <div className="text">Back</div>
      </div>
    </div>
  );
}

export default Header;
