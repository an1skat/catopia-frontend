import React, { useState, useEffect } from "react";
import "./styles/login.css";
import "./styles/register.css";
import cats from "../img/black-and-grey-cats-img.jpg";
import {
  EmailSvg,
  VisibilityOffSvg,
  VisibilityOnSvg,
  GoogleSvg,
  FacebookSvg,
  TwitterSvg,
  LogoSvg,
} from "../components/Svg.js";
import { togglePasswordVisibility } from "../utils/passwordVisibility.js";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authContext.js";

const Login = () => {
  const { setLoginStatus } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepPasswordVisible, setIsRepPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = (inputId, isPassword) => {
    togglePasswordVisibility(inputId);

    if (isPassword) {
      setIsPasswordVisible(!isPasswordVisible);
    } else {
      setIsRepPasswordVisible(!isRepPasswordVisible);
    }
  };

  const getVisibilityIcon = (isPassword) => {
    return isPassword ? (
      isPasswordVisible ? (
        <VisibilityOnSvg />
      ) : (
        <VisibilityOffSvg />
      )
    ) : isRepPasswordVisible ? (
      <VisibilityOnSvg />
    ) : (
      <VisibilityOffSvg />
    );
  };

  useEffect(() => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let elem = e.target;

      let formData = {
        email: elem.email.value,
        password: elem.password.value,
      };

      try {
        const response = await axios.post(
          "https://catopia-backend.onrender.com/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { token, ...userData} = response.data;

        localStorage.setItem('authToken', token);

        console.log(response.data);
        console.log("Login successful");
        setLoginStatus(true);
        navigate("/");
      } catch (error) {
        console.error(error);
        setLoginStatus(false);
      }
    });
  }, [isPasswordVisible, isRepPasswordVisible]);
  return (
    <div className="login-container">
      <section className="login">
        <div className="login-content">
          <h1 className="login-title">Log In</h1>
          <form id="login-form" className="login-form">
            <div className="login-input-container">
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <EmailSvg />
            </div>
            <div className="login-input-container">
              <input
                id="password"
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                className="login-visibility-btn"
                type="button"
                onClick={() => toggleVisibility("password", true)}
              >
                {getVisibilityIcon(true)}
              </button>
            </div>
            <div className="wrapper">
              <div className="login-checkbox-container">
                <input className="remember" type="checkbox" name="remember" />
                <p className="login-checkbox-text">Remember me</p>
              </div>
              <NavLink to="/forgot-password" className="link password-link" >
                Forgot your password?
              </NavLink>
            </div>
            <button className="submit-login-btn" type="submit">
              Login Now
            </button>
          </form>
          <p className="or-text login-or-text">or</p>
          <div className="login-link-container">
            <a className="google">
              <GoogleSvg />
            </a>
            <a className="facebook">
              <FacebookSvg />
            </a>
            <a className="twitter">
              <TwitterSvg />
            </a>
          </div>
          <span className="user-guestion">
            New User?
            <NavLink
              to="/register"
              className="link signup-link"
              href="#"
            >
              &nbsp;Sign Up
            </NavLink>
          </span>
        </div>
      </section>
      <section className="welcome">
        <div className="login-welcome-container">
          <h2 className="welcome-text">WELCOME TO</h2>
          <p className="logo link">
            cat
            <span className="logo-span">
              <LogoSvg />
            </span>
            pia
          </p>
        </div>
        <img className="welcome-img" src={cats} alt="black and grey cats" />
      </section>
    </div>
  );
};

export default Login;
