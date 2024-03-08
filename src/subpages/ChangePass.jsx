import React, { useState, useEffect } from "react";
import "./styles/forgotPass.css";
import "../styles/main.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePass = () => {
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
      const password = e.target.password.value;

      if (password.length < 8 || password.length > 15) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: "Пароль должен содержать от 8 до 15 символов",
        }));
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await axios.patch(
          "https://catopia-backend.onrender.com/change-password",
          { password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);

        navigate("/login");
      }
      catch (err) {
        console.log(err);
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
        <h2 className="forgot-title">New Password</h2>
        <p className="forgot-text">
          Almost done! Creaye a new password. It <br />
          should consist of at least 8 characters.
        </p>
        <form className="forgot-form">
          <input
            name="password"
            type="password"
            placeholder="Enter new password"
            className="forgot-input"
          />
          <button
            style={{ marginTop: "27px" }}
            type="submit"
            className="forgot-btn"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePass;
