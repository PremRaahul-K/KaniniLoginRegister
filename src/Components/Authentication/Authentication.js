import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import "../Authentication/Authentication.css";
import AuthenticationTopImage from "../Images/AuthenticationMessageTop.png";
import AuthenticationBottomImage from "../Images/AuthenticationMessageBottom.png";
import AuthenticationSignInBottomImage from "../Images/AuthenticationSignInBottom.png";
import KaniniLogo from "../Images/Kanini-Logo.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function Authentication() {
  return (
    <div className="Authentication">
      <div className="InvestmentSearchEngineMessage">
        <div className="AuthTopRightImageContainer">
          <img
            src={AuthenticationTopImage}
            className="AuthenticationTopImage"
          />
        </div>
        <div className="AuthCenterMessage">
          <div className="AuthCenterContent">
            <div className="AuthQuoteContainer">
              <i className="bi bi-quote"></i>
            </div>
            <div>
              <span className="AuthQuoteTitle">
                Experience Seamless Stock Search Here
              </span>
            </div>
            <div>
              <span className="AuthQuoteSubTitle">Kanini Ticker Platform</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={AuthenticationBottomImage}
            className="AuthenticationBottomImage"
          />
        </div>
      </div>
      <div className="AuthenticationCredentials">
        <div className="KaniniLogoContainer">
          <img src={KaniniLogo} className="KaniniLogo" />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signup/" element={<SignUp />} />
          </Routes>
        </div>
        <div>
          <img
            src={AuthenticationSignInBottomImage}
            className="AuthenticationSignInBottomImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
