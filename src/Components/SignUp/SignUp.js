import React, { useState } from "react";
import "../Authentication/Authentication.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="SignIn">
      <div className="SignUpCredentials">
        <div className="SignInContext">
          <span className="SignInLable">Sign Up</span>
          <span className="SignInLableSubText">
            Welcome!Please enter your details for signing up.
          </span>
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Name</label>
          <input
            type="text"
            className="SigInInputField"
            placeholder="Eg:Jhon"
          />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Date Of Birth</label>
          <input type="Date" className="SigInInputField" />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Phone Number</label>
          <input
            type="tel"
            className="SigInInputField"
            placeholder="Eg:9876543210"
          />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Email</label>
          <input
            type="email"
            className="SigInInputField"
            placeholder="example@kanini.com"
          />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Password</label>
          <input
            type="password"
            className="SigInInputField"
            placeholder="Password"
          />
        </div>
        <div className="SignInContext">
          <label className="SigInInputLable">Confirm Password</label>
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
          </div>{" "}
        </div>
      </div>
      <div className="SignInButtonContainer">
        <div>
          <button className="SignInButton">SIGN UP</button>
        </div>
        <div className="SignUpLink">
          <span>
            Already a user?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Sign In
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
