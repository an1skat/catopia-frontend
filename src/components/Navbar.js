import { LogoSvg } from "../components/Svg.js";
import { NavLink, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useAuth } from "../utils/authContext.js";
import { PersonSvg, NotificationsSvg } from "../components/Svg.js";
import axios from "axios";
const UserProfile = () => {
  const { authToken } = useAuth();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    axios
      .get("https://catopia-backendd.onrender.com/getAvatar", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const avatarFileName = response.data.avatar;

        // Перевірка на правильний тип аватара
        if (typeof avatarFileName === 'string' && avatarFileName !== 'null') {
          setAvatar(avatarFileName);
        } else {
          setAvatar(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setAvatar(null);
      });
  }, [authToken]);

  return (
    <div>
      {avatar !== null ? (
        <Link to="/profile">
          <img
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            src={`https://catopia-backendd.onrender.com/uploads/${avatar}`}
            alt="User Avatar"
          />
        </Link>
      ) : (
        <Link to="/profile">
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
