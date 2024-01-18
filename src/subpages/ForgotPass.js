import React, { useState, useEffect } from "react";
import "./styles/forgotPass.css";
import "../styles/main.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPass = () => {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const form = document.querySelector(".forgot-form");
  
      const handleSubmit = async (e) => {
        e.preventDefault();
  
        if (isSubmitting) {
          return;
        }
  
        setIsSubmitting(true);
  
        const formData = new FormData(e.target);
        const email = formData.get("email");
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: "Некорректная почта",
          }));
          setIsSubmitting(false);
          return;
        }
  
        try {
          const response = await axios.post(
            "https://catopia-backendd.onrender.com/forgot-password",
            { email },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          console.log(response.data);
  
          // После успешной отправки, редиректим пользователя на /confirm
          navigate("/confirm");
        } catch (error) {
          console.log(error);
        } finally {
          setIsSubmitting(false);
        }
      };
  
      form.addEventListener("submit", handleSubmit);
      return () => form.removeEventListener("submit", handleSubmit);
    }, [isSubmitting, navigate]);

  return (
    <section className="forgot-section">
      <div className="container">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-text">
          Enter your email for the verification process. <br /> We will send a
          6-digit code to your email
        </p>
        <form className="forgot-form">
          <input
            name="email"
            type="email"
            placeholder="user@gmail.com"
            className="forgot-input"
          />
          <div className="forgot-btn-container">
            <NavLink to="/login" className="back-btn link">
              Back
            </NavLink>
            <button type="submit" className="forgot-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPass;
