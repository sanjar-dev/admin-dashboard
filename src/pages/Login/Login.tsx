import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as VisibilityToggle } from "../../assets/active.svg";

export const Login: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="login-wrapper center">
      <div className="login">
        <div className="header center">
          <Logo className="logo"></Logo>
          <h3 className="sub">Dashboard Kit</h3>
        </div>
        <div className="title center">
          <h2>Log in to Dashboard Kit</h2>
          <p className="sub">Enter your email and password below</p>
        </div>
        <div className="fields">
          <div className="field">
            <div className="label">
              <span>Email</span>
            </div>
            <div className="input">
              <input type="text" name="" id="" placeholder="Email address" />
            </div>
          </div>
          <div className="field">
            <div className="label">
              <span>Password</span>
              <a href="./">Forgot password?</a>
            </div>
            <div className="input">
              <input type="password" name="" id="" placeholder="Password" />
              <VisibilityToggle className="inner-icon"></VisibilityToggle>
            </div>
          </div>
        </div>
        <button onClick={() => handleSubmit()}>Log in</button>
        <p>
          Don't have an account? <a href="./">Sign up</a>
        </p>
      </div>
    </div>
  );
};
