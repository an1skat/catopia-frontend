import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollControl = () => {
  const location = useLocation();

  useEffect(() => {
    const hideScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const showScroll = () => {
      document.body.style.overflow = "visible";
    };

    if (location.pathname === "/login") {
      hideScroll();
    } else {
      showScroll();
    }

    return () => {
      showScroll();
    };
  }, [location.pathname]);

  return null; 
};

export default ScrollControl;
