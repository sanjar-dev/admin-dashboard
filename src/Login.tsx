import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

export const Login = () => (
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
        <span>Email</span>
        <input type="text" name="" id="" placeholder="Email address" />
      </div>
      <div className="field">
        <span>Password</span>
        <input type="text" name="" id="" placeholder="Password" />
      </div>
    </div>
    <button>Log in</button>
    <p>
      Don't have an account? <a href="./">Sign up</a>
    </p>
  </div>
);