import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/forgotPass.css";
import "../styles/main.css";
import axios from "axios";

const ConfirmPass = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [inputRefs, setInputRefs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInputRefs(Array.from({ length: 6 }, (_, index) => React.createRef()));
  }, []);

  useEffect(() => {
    if (inputRefs.length > 0 && inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, [inputRefs]);

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5 && value.length === 1 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e, value) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      value.length === 0 &&
      inputRefs[index - 1].current
    ) {
      inputRefs[index - 1].current.focus();
    }
  };

  const enteredCode = code.join("");
  const handleValidateCode = async (e) => {
    e.preventDefault();
    console.log("Entering handleValidateCode");
    if (enteredCode.length === 6) {
      console.log("Code is valid. Proceeding to handleSubmit");
      await handleSubmit();
    } else {
      alert("Please enter a 6-digit code.");
    }

    console.log("Exiting handleValidateCode");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("Entering handleSubmit");
    try {
      const response = await axios.post(
        "https://catopia-backendd.onrender.com/confirm",
        { userCode: enteredCode },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      navigate("/change-password");
    } catch (error) {
      console.error(error);
    }
    console.log("Exiting handleSubmit");
  };

  return (
    <section className="forgot-section">
      <div className="container">
        <h2 className="forgot-title">Enter 6-Digit Code</h2>
        <p className="forgot-text">
          Enter the 6-digit code that was sent to your email.
        </p>
        <form method="post" className="forgot-form">
          <div className="code-input">
            {code.map((value, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                name="code"
                type="text"
                className="confirm-input"
                minLength="1"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e, value)}
              />
            ))}
          </div>
          <button
            type="submit"
            className="forgot-btn"
            onClick={handleValidateCode}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConfirmPass;
