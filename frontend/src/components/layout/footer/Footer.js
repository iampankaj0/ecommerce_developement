import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/istore.png";
import logo from "../../../images/logo_main.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftfooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android & IOS monile phone</p>
        <div>
          <img src={playstore} alt="andriod" />
          <img src={appstore} alt="ios" />
        </div>
      </div>
      <div className="midfooter">
        <img src={logo} alt="logo" />
        <p> High Quality is our first prority</p>
        <p>copyrights 2022 &copy; Pankaj Yadav</p>
      </div>
      <div className="rightfooter">
        <h4>Follow Us:</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/_iampankaj/"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/c/funminister"
        >
          Youtube
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/iampankaj0"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
