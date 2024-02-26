import { useState, useEffect } from "react";
import { LikeSvg, DetailSvg, ActiveLikeSvg } from "../components/Svg";
import MainAvatar from "../img/main-avatar.png";
import axios from "axios";

const Comment = ({ commentId, currentUser }) => {
  const [commentData, setCommentData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  const fetchComment = async () => {
    try {
      if (commentId === null) {
        return;
      }

      const response = await axios.get(
        `https://catopia-backend.onrender.com/comment/${commentId}/get`
      );
      setCommentData(response.data);
      console.log("commentData:", response.data);
      setUserAvatar(response.data.user.avatar || MainAvatar);
      
    } catch (error) {
      console.error("Error fetching comment:", error);
    }
  };

  useEffect(() => {
    if (commentId !== null) {
      fetchComment();
    }
  }, [commentId]);

  useEffect(() => {
    setIsLiked(
      commentData &&
        commentData.comment.likes &&
        commentData.comment.likes.users.includes(currentUser)
    );
  }, [commentData, currentUser]);

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        await axios.get(`https://catopia-backend.onrender.com/comment/${commentId}/del`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        localStorage.removeItem(`like-${commentId}`);
        setIsLiked(false);
      } else {
        await axios.get(`https://catopia-backend.onrender.com/comment/${commentId}/add`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        localStorage.setItem(`like-${commentId}`, true);
        setIsLiked(true);
      }

      fetchComment();
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (commentId !== null) {
        fetchComment();
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [commentId]);

  if (!commentData || !userAvatar) {
    return null;
  }

  const isBigComment = commentData.comment.text.length > 50;

  return (
    <li className={`comment-list-item ${isBigComment ? "big" : ""}`}>
      <img src={userAvatar} alt="user avatar" className="comment-avatar" />
      <div className="main-info-comment">
        <button type="button" className="comment-detail">
          <DetailSvg />
        </button>
        <h4 className="comment-name">{commentData.user.name}</h4>
        <p className="comment-text">{commentData.comment.text}</p>
        <div className="comment-interaction">
          <button
            type="button"
            className={`comment-like ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {isLiked ? (
              <ActiveLikeSvg className="like-svg" />
            ) : (
              <LikeSvg className="like-svg" />
            )}
            <span className="comment-like-count">
              {commentData.comment.likes ? commentData.comment.likes.count : 0}
            </span>
          </button>
          <button type="button" className="comment-reply">
            Reply
          </button>
        </div>
      </div>
    </li>
  );
};

export default Comment;
