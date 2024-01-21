import React, { useState, useEffect } from "react";
import { useAuth } from "../utils/authContext.js";
import axios from "axios";
import { AvatarSvg } from "../components/Svg.js";

export const UploadAvatar = ({ onFileChange }) => {
  const { authToken } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isImageClicked, setIsImageClicked] = useState(false);

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

    fetchAvatar();  
  }, [authToken]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        onFileChange(file);
      } else {
        alert("Please choose a valid image file (.jpg or .png)");
      }
    }
  };

  const handleImageClick = () => {
    if (!isImageClicked) {
      console.log('Image clicked!');
      setIsImageClicked(true);
    }
  };
  
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <label>
          {selectedFile ? (
            <img
              style={{ borderRadius: '50%', width: '200px', height: '200px', cursor: 'pointer' }}
              src={URL.createObjectURL(selectedFile)}
              alt="User Avatar"
              onClick={handleImageClick}
            />
          ) : avatar !== null ? (
            <img
              style={{ borderRadius: '50%', width: '200px', height: '200px', cursor: 'pointer' }}
              src={`https://catopia-backend.onrender.com/uploads/${avatar}`}
              alt="User Avatar"
              onClick={handleImageClick}
            />
          ) : (
            <AvatarSvg
              style={{ cursor: 'pointer' }}
              onClick={handleImageClick}
            />
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ opacity: '0', position: 'absolute' }}
            onChange={handleFileChange}
            name='file'
          />
        </label>
      )}
    </div>
  );
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get('https://catopia-backend.onrender.com/getAllUsers');
        return response.data;
    }
    catch (err) {
        console.error('Error fetching users:', err.message);
    }
}

export const getUserProfile = async (id) => {
    try {
        const response = await axios.get(`https://catopia-backend.onrender.com/getUser/${id}`);
        return console.log("Response:", response.data);
    }
    catch (err) {
        console.error('Error fetching user profile:', err.message);
    }
}