import React, { useState } from "react";
import "../Authentication/Authentication.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="SignIn">
      <div className="SignInCredentials">
        <div className="SignInContext">
          <span className="SignInLable">Sign In</span>
          <span className="SignInLableSubText">
            Welcome back! Please enter email id and password
          </span>
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Email ID</label>
          <input
            type="text"
            className="SigInInputField"
            placeholder="example@kanini.com"
          />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="SigInInputField"
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <i className="bi bi-eye-slash-fill PasswordVisible"></i>
              ) : (
                <i className="bi bi-eye-fill PasswordVisible"></i>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="SignInButtonContainer">
        <div>
          <button className="SignInButton">SIGN IN</button>
        </div>
        <div className="SignUpLink">
          <span>
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/signup/");
              }}
            >
              Sign Up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
