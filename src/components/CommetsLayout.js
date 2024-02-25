import { useState, useEffect } from "react";
import { LikeSvg, DetailSvg } from "../components/Svg";
import MainAvatar from "../img/main-avatar.png";
import axios from "axios"; // Імпортуйте axios або інший бібліотеку для HTTP-запитів

const Comment = ({ commentId }) => {
  const [commentData, setCommentData] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        console.log("commentId:", commentId);

        if (commentId === null) {
          return;
        }

        const response = await axios.get(
          `https://catopia-backend.onrender.com/comment/${commentId}/get`
        );
        console.log("Comment data:", response.data);
        setCommentData(response.data);
      } catch (error) {
        console.error("Error fetching comment:", error);
      }
    };

    if (commentId !== null) {
      fetchComment();
    }
  }, [commentId]);

  if (!commentData) {
    return null; // Поки дані не завантажилися, можна показати заглушку або нічого
  }

  const isBigComment = commentData.comment.text.length > 50; // Припустима умова для визначення розміру коментаря

  return (
    <li className={`comment-list-item ${isBigComment ? "big" : ""}`}>
      <img src={MainAvatar} alt="main avatar" className="comment-avatar" />
      <div className="main-info-comment">
        <button type="button" className="comment-detail">
          <DetailSvg />
        </button>
        <h4 className="comment-name">{commentData.user.name}</h4>
        <p className="comment-text">{commentData.comment.text}</p>
        <div className="comment-interaction">
          <button type="button" className="comment-like">
            <LikeSvg />
            <span className="comment-like-count">{commentData.comment.likes}</span>
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
