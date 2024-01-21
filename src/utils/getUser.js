import { useEffect, useState } from "react";
import axios from "axios";

const AllUserProfile = () => {
  const [user, setUser] = useState(null);

   const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    console.log("authToken:", authToken);
    const fetchData = async () => {
      try {
        const response = await axios.get("https://catopia-backend.onrender.com/getUser", {
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
