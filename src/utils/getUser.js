import { useEffect, useState } from "react";
import { useAuth } from "./authContext.js";
import axios from "axios";

const AllUserProfile = () => {
  const { authToken } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://catopia-backendd.onrender.com/getUser", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error during request:", error);
      }
    };

    fetchData();
  }, [authToken]);

  console.log("User:", user);

  return user;
};

export default AllUserProfile;
