import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectAfterAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.authToken) {
      localStorage.setItem("authToken", params.authToken);
      navigate("/home");
    }
  }, [location, navigate]);

  return null;
};

export default RedirectAfterAuth;
