import React, { useState, useEffect } from "react";
import "./styles/register.css";
import {
  ManSvg,
  EmailSvg,
  VisibilityOffSvg,
  VisibilityOnSvg,
  GoogleSvg,
  FacebookSvg,
  TwitterSvg,
  LogoSvg,
} from "../components/Svg.js";
import cats from "../img/orange-and-grey-cats-img.png";
import { togglePasswordVisibility } from "../utils/passwordVisibility.js";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepPasswordVisible, setIsRepPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
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
  const getErrorClass = (inputName) => {
    return formErrors[inputName] ? "error" : "";
  };

  useEffect(() => {
    const form = document.getElementById("register-form");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (isSubmitting) {
        return;
      }
  
      setIsSubmitting(true);
  
      let elem = e.target;
  
      let formData = {
        name: elem.name.value,
        email: elem.email.value,
        password: elem.password.value,
        repPassword: elem.repPassword.value,
      };
  
      try {
        const newFormErrors = {};
  
        // Проверка почты
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newFormErrors.email = "Некорректная почта";
        }
  
        // Проверка имени
        const nameRegex = /^[a-zA-Z0-9]{3,30}$/;
        if (!nameRegex.test(formData.name)) {
          newFormErrors.name = "Имя должно содержать от 3 до 30 буквенно-цифровых символов";
        }
  
        // Проверка пароля
        if (formData.password.length < 8 || formData.password.length > 15) {
          newFormErrors.password = "Пароль должен содержать от 8 до 15 символов";
        }
  
        // Проверка повторного ввода пароля
        if (formData.repPassword !== formData.password) {
          newFormErrors.repPassword = "Повторный пароль должен совпадать с паролем";
        }
  
        // Обновление formErrors
        setFormErrors(newFormErrors);
  
        // Если есть ошибки, завершаем выполнение
        if (Object.keys(newFormErrors).length > 0) {
          setIsSubmitting(false);
          return;
        }
  
        // Если ошибок нет, продолжаем с отправкой данных
        const response = await axios.post(
          "https://catopia-backend.onrender.com/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        console.log(response.data);
        console.log("Registration successful");
        navigate("/login");
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [
    isPasswordVisible,
    isRepPasswordVisible,
    isSubmitting,
    formErrors,
    navigate,
  ]);

  return (
    <div className="register-container">
      <div className="welcome-container">
        <h2 className="welcome-text">Welcome to</h2>
        <p className="logo link">
          cat
          <span className="logo-span">
            <LogoSvg />
          </span>
          pia
        </p>
      </div>
      <img className="register-img" src={cats} alt="cats" />
      <div className="register-content">
        <h2 className="register-title">Create Account</h2>
        <div className="link-container">
          <a className="google" href="http://localhost:8888/auth/google">
            <GoogleSvg />
          </a>
          <a className="facebook">
            <FacebookSvg />
          </a>
          <a className="twitter">
            <TwitterSvg />
          </a>
        </div>
        <p className="or-text">or</p>
        <form id="register-form" method="POST" className="register-form">
          <div className="register-input-container">
            <input
              name="name"
              type="text"
              placeholder="Username"
              className={`register-input ${getErrorClass("name")}`}
            />
            <ManSvg />
          </div>

          <div className="register-input-container">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={`register-input ${getErrorClass("email")}`}
            />
            <EmailSvg />
          </div>

          <div className="register-input-container">
            <input
              name="password"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className={`register-input ${
                isPasswordVisible ? "error" : ""
              } ${getErrorClass("password")}`}
            />

            <button
              className="visibility-btn"
              type="button"
              onClick={() => toggleVisibility("password", true)}
            >
              {getVisibilityIcon(true)}
            </button>
          </div>
          <div className="register-input-container">
            <input
              name="repPassword"
              id="repPassword"
              type={isRepPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className={`register-input ${
                isRepPasswordVisible ? "error" : ""
              } ${getErrorClass("repPassword")}`}
            />
            <button
              className="visibility-btn"
              type="button"
              onClick={() => toggleVisibility("repPassword", false)}
            >
              {getVisibilityIcon(false)}
            </button>
          </div>
          <div className="register-checkbox-container">
            <input id="checkbox" name="checkbox" type="checkbox" />
            <p className="register-checkbox-text">
              I agree with terms & conditions
            </p>
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Sign Up
          </button>

          <p className="register-text">
            Already have an account?
            <NavLink to="/login" className="register-link link">
              &nbsp;Log In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
