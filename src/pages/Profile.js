import { NavLink, useParams } from "react-router-dom";
import "../styles/main.css";
import "./styles/profile.css";
import {
  EditSvg,
  SettingsSvg,
  SearchSvg,
  SaveSvg,
  CommentSvg,
  LikeSvg,
  PlusSvg,
  AvatarSvg,
  SmallAvatarSvg,
  BackSvg,
  TwitterSvg,
  FacebookSvg,
  InstagramSvg,
  FullLogoSvg,
  CloseSvg,
} from "../components/Svg.js";
import { React, useState, useEffect } from "react";
import { useAuth } from "../utils/authContext.js";
import axios from "axios";
import AllUserProfile from "../utils/getUser.js";
import { UploadAvatar, getUserProfile } from "../utils/DifferentUtils.js";
import UserId from "../utils/Userid.js";

const UserProfile = () => {
  const { authToken } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatar = async () => {
      if (authToken) {
        try {
          const response = await axios.get(
            "https://catopia-backend.onrender.com/getAvatar",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          const avatarFileName = response.data.avatar;

          if (typeof avatarFileName === "string" && avatarFileName !== "null") {
            setAvatar(avatarFileName);
          } else {
            setAvatar(null);
          }
        } catch (error) {
          console.error(error);
          setAvatar(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    // Вызывать fetchAvatar каждую секунду
    const intervalId = setInterval(() => {
      fetchAvatar();
    }, 100);

    // Очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [authToken]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : avatar !== null ? (
        <img
          style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          src={`https://catopia-backend.onrender.com/uploads/${avatar}`}
          alt="User Avatar"
        />
      ) : (
        <AvatarSvg />
      )}
    </div>
  );
};
const SmallUserProfile = () => {
  const { authToken } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatar = async () => {
      if (authToken) {
        try {
          const response = await axios.get(
            "https://catopia-backend.onrender.com/getAvatar",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          const avatarFileName = response.data.avatar;

          if (typeof avatarFileName === "string" && avatarFileName !== "null") {
            setAvatar(avatarFileName);
          } else {
            setAvatar(null);
          }
        } catch (error) {
          console.error(error);
          setAvatar(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const intervalId = setInterval(() => {
      fetchAvatar();
    }, 100);

    // Очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [authToken]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : avatar !== null ? (
        <img
          style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          src={`https://catopia-backend.onrender.com/uploads/${avatar}`}
          alt="User Avatar"
        />
      ) : (
        <SmallAvatarSvg />
      )}
    </div>
  );
};
const UserName = () => {
  const userProfile = AllUserProfile();
  const name = userProfile ? userProfile.name : null;
  return <p className="my-post-user-info-name">{name ? name : "User Name"}</p>;
};

const UserDate = () => {
  const userProfile = AllUserProfile();
  const date = userProfile ? userProfile.createdAt : null;
  return <p className="my-post-user-info-date">{date ? date : "Date"}</p>;
};

const Modal = ({ isModalVisible, onConfirm, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleConfirm = async () => {
    const authToken = localStorage.getItem("authToken");

    console.log(selectedFile);

    if (!selectedFile) {
      throw new Error("No file selected");
    }

    if (!authToken) {
      throw new Error("Unauthorized");
    }

    try {
      onConfirm(selectedFile);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://catopia-backend.onrender.com/profile/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log(response.data);
      console.log("File uploaded successfully");
      // window.location.reload();
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  return (
    <>
      {isModalVisible && (
        <div className="backdrop" data-modal>
          <div className="avatar-modal">
            <button
              type="button"
              className="avatar-modal-closebtn"
              onClick={onClose}
            >
              <CloseSvg />
            </button>
            <h3 className="avatar-modal-supertitle">
              <FullLogoSvg />
            </h3>
            <h4 className="avatar-modal-title">Profile photo</h4>
            <p className="avatar-modal-text">
              From your profile photo, other people will be able to recognize
              you.
            </p>
            <UploadAvatar onFileChange={handleFileChange} />
            <button
              type="button"
              className="avatar-modal-btn"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Profile = () => {
  const id = window.location.pathname.split("/profile/")[1];
  console.log("id:", id);
  const [avatar, setAvatar] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://catopia-backend.onrender.com/getUser/${id}`);
      const userData = response.data.user;
      setUserProfile(userData);
      setAvatar(userData.avatar); // Предположим, что информация о пользователе содержит поле "avatar"
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [id]);

  const handleModalConfirm = async (newAvatarFileName) => {
    setAvatar(newAvatarFileName);
    setIsModalVisible(false);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  if (!userProfile) {
    console.log("Loading...");
    return null;
  }

  console.log("User Profile:", userProfile);
  getUserProfile(id);
  return (
    <>
      <div className="profile">
        <section className="nav-section">
          <nav className="profile-nav">
            <ul className="nav-list list">
              <li className="profile-nav-list-item">
                <NavLink
                  to="/profile"
                  className="profile-nav-link link profile-link-active"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <section className="profile-section">
          <div className="profile-info">
            <div className="text-container">
              <NavLink to="/home" className="profile-back-btn">
                <BackSvg />
              </NavLink>
              <p className="profile-info-title">Profile</p>
              <button className="settings-btn">
                Settings
                <SettingsSvg />
              </button>
            </div>
            <div className="avatar-container-container">
              <div className="avatar-container">
                <UserProfile />
                <button
                  className="avatar-edit-btn"
                  type="button"
                  onClick={handleModalOpen}
                  data-modal-open
                >
                  <EditSvg />
                </button>
              </div>
            </div>
            <div className="profile-info-content">
              <ul className="profile-info-list list">
                <li className="profile-info-list-item">
                  <p className="profile-info-count">7</p>
                  <p className="profile-text">posts</p>
                </li>
                <li className="profile-info-list-item">
                  <p className="profile-info-count">163</p>
                  <p className="profile-text">followers</p>
                </li>
                <li className="profile-info-list-item">
                  <p className="profile-info-count">25</p>
                  <p className="profile-text">following</p>
                </li>
              </ul>
              <ul className="social-links-list list">
                <li className="social-links-list-item">
                  <a href="#" className="social-link link">
                    <TwitterSvg />
                  </a>
                </li>
                <li className="social-links-list-item">
                  <a href="#" className="social-link link">
                    <FacebookSvg />
                  </a>
                </li>
                <li className="social-links-list-item">
                  <a href="#" className="social-link link">
                    <InstagramSvg />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-content">
            <div className="my-info">
              <ul className="profile-content-list list">
                <li className="profile-content-list-item">
                  <button className="profile-list-btn">
                    Search by tag
                    <SearchSvg />
                  </button>
                </li>
                <li className="profile-content-list-item">
                  <button className="profile-list-btn">
                    Create a post
                    <PlusSvg />
                  </button>
                </li>
              </ul>
              <div className="my-post">
                <div className="my-post-main-container">
                  <div className="my-post-user-info">
                    <SmallUserProfile />
                    <div className="my-post-user-info-text">
                      <UserName />
                      <UserDate />
                    </div>
                  </div>
                  <button className="my-post-detail-btn"></button>
                </div>
                <div className="my-post-main-container">
                  <div className="my-post-text-container">
                    <p className="my-post-tag">#Cats</p>
                    <p className="my-post-text">cats</p>
                  </div>
                  <ul className="my-post-btn-list list">
                    <li className="my-post-btn-list-item">
                      <button className="my-post-btn">
                        <SaveSvg />
                      </button>
                    </li>
                    <li className="my-post-btn-list-item">
                      <button className="my-post-btn">
                        <CommentSvg />
                      </button>
                    </li>
                    <li className="my-post-btn-list-item">
                      <button className="my-post-btn">
                        <LikeSvg />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="my-post-main-container">
                  <ul className="my-post-img-list list">
                    <li className="my-post-img-list-item">
                      <img src="" alt="" />
                    </li>
                    <li className="my-post-img-list-item">
                      <img src="" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="my-content-list list">
              <li className="my-content-list-item">
                <div className="my-content-container">
                  <div className="my-content-info">
                    <p className="profile-content-title">My photos</p>
                    <p className="profile-content-count">21</p>
                  </div>
                  <button className="my-content-plus-btn"></button>
                </div>
                <ul className="my-content-posts-list list">
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                </ul>
              </li>
              <li className="my-content-list-item">
                <div className="my-content-container">
                  <div className="my-content-info">
                    <p className="profile-content-title">My videos</p>
                    <p className="profile-content-count">21</p>
                  </div>
                  <button className="my-content-plus-btn"></button>
                </div>
                <ul className="my-content-posts-list list">
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                  <li className="my-content-post">
                    <img className="my-content-post-img" src="" alt="" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Modal
        isModalVisible={isModalVisible}
        onConfirm={handleModalConfirm}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default Profile;
