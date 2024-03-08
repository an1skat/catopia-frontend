import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../utils/authContext.jsx";
import { useNavigate } from "react-router-dom";

const AuthMe = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        console.log("authToken", authToken);

        if (!authToken) {
          throw new Error("No authentication token available.");
        }

        console.log(
          "Before setLoginStatus and setAuthToken",
          authContext.setLoginStatus,
          authContext.setAuthToken
        );

        const response = await axios.post(
          "https://catopia-backend.onrender.com/auth/me",
          null,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log(response.data);
        console.log("Login successful");

        authContext.setLoginStatus(true);
        authContext.setAuthToken(authToken);
        console.log(
          "After setLoginStatus and setAuthToken",
          authContext.setLoginStatus,
          authContext.setAuthToken
        );
        navigate('/home');
      } catch (error) {
        console.error("Login failed", error);
        authContext.setLoginStatus(false);
        navigate('/home');
      }
    };

    fetchData();
  }, [authContext, navigate]);

  return null;
};

export default AuthMe;
