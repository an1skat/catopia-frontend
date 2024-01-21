import { useEffect, useState } from "react";
import AllUserProfile from "./getUser";

const UserId = () => {
  const [userId, setUserId] = useState(null);
  const UserProfile = AllUserProfile();

  useEffect(() => {
    if (UserProfile && UserProfile._id) {
      setUserId(UserProfile._id);
    }
  }, [UserProfile]);

  return userId;
};

export default UserId;
