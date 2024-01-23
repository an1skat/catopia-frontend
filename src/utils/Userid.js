import { useEffect, useState } from "react";
import axios from "axios";

const UserId = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  const AuthToken = localStorage.getItem("authToken");

  useEffect(() => {
    console.log("AuthToken:", AuthToken);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://catopia-backend.onrender.com/getUser",
          {
            headers: {
              Authorization: `Bearer ${AuthToken}`,
            },
          }
        );

        setUser(response.data.user);
        setUserId(response.data.user._id);
        setUserName(response.data.user.name);
        setUserAvatar(response.data.user.avatar);
      }
      catch (err) {
        console.error("Error during request:", err);
      }
    }

    fetchData();
  }, [AuthToken]);

  console.log("User:", user);
  console.log("User ID:", userId);
  console.log("User Name:", userName);
  console.log("User Avatar:", userAvatar);

  return {
    userId: user ? user._id : null,
    userName: user ? user.name : null,
    userAvatar: user ? user.avatar : null,
  };
};

export default UserId;
