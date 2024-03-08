import React, { useState } from "react";
import axios from "axios";
import { MediumLoader } from "../components/Loader/Loader.jsx";

export const UploadAvatar = ({ onFileChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isImageClicked, setIsImageClicked] = useState(false);

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
      console.log("Image clicked!");
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
              style={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                cursor: "pointer",
              }}
              src={URL.createObjectURL(selectedFile)}
              alt="User Avatar"
              onClick={handleImageClick}
            />
          ) : localStorage.getItem("userAvatar") !== null ? (
            <img
              style={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                cursor: "pointer",
              }}
              src={localStorage.getItem("userAvatar")}
              alt="User Avatar"
              onClick={handleImageClick}
            />
          ) : (
            <div
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MediumLoader />
            </div>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ opacity: "0", position: "absolute" }}
            onChange={handleFileChange}
            name="file"
          />
        </label>
      )}
    </div>
  );
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      "https://catopia-backend.onrender.com/getAllUsers"
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching users:", err.message);
  }
};

export const getUserProfile = async (id) => {
  try {
    const response = await axios.get(
      `https://catopia-backend.onrender.com/getUser/${id}`
    );
    return console.log("Response:", response.data);
  } catch (err) {
    console.error("Error fetching user profile:", err.message);
  }
};
