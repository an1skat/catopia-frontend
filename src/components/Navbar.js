import { LogoSvg } from "../components/Svg.js";
import { NavLink, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useAuth } from "../utils/authContext.js";
import { PersonSvg, NotificationsSvg } from "../components/Svg.js";
import { MiniLoader } from "./Loader.js";
import UserId from "../utils/Userid.js";
const UserProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = UserId();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = () => {
      const storedAvatar = localStorage.getItem('userAvatar');
      if (storedAvatar) {
        setAvatar(storedAvatar);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MiniLoader />
        </div>
      ) : avatar ? (
        <Link to={`/profile/${userId}`}>
          <img
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            src={avatar}
            alt="User Avatar"
          />
        </Link>
      ) : (
        <Link to={`/profile/${userId}`}>
          <PersonSvg />
        </Link>
      )}
    </div>
  );
};

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive ? "nav-link nav-link-active link" : "nav-link link";
  const { isLogin } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/home" className="logo link">
          cat
          <span className="logo-span">
            <LogoSvg />
          </span>
          pia
        </NavLink>
        <nav className="nav">
          <ul className="nav-list list">
            <li className="nav-list-item">
              <NavLink to="/home" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/about-cats" className={activeLink} href="#">
                About cats
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink className="nav-link link" href="#">
                Gallery
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/about-us" className={activeLink} href="#">
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
        {isLogin ? (
          <div className="header-btn-login-container">
            <Link to="/notifications">
              <NotificationsSvg />
            </Link>
            <UserProfile />
          </div>
        ) : (
          <div className="header-btn-container">
            <NavLink to="/login" className="login-btn link">
              Login
            </NavLink>
            <NavLink to="/register" className="signup-btn link">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
