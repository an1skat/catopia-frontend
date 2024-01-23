import { useEffect, useState } from "react";
import axios from "axios";

const AllUserProfile = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const id = window.location.pathname.split("/profile/")[1];
  console.log("id:", id);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://catopia-backend.onrender.com/getUser/${id}`);
      const userData = response.data.user;
      setUserProfile(userData);
      setUserId(userData._id);
      setUserName(userData.name);
      setUserAvatar(userData.avatar);
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [id]);

  console.log("User:", userProfile);
  console.log("User ID:", userId);
  console.log("User Name:", userName);
  console.log("User Avatar:", userAvatar);

  return {
    userId: userProfile ? userProfile._id : null,
    userName: userProfile ? userProfile.name : null,
    userAvatar: userProfile ? userProfile.avatar : null,
  };
};

export default AllUserProfile;
