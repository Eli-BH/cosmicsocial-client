import { Grade, MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import { useState, useEffect } from "react";

import "./post.scss";
import axios from "axios";

const Post = ({ text, img, createdAt, likes, user, id }) => {
  const [postUser, setPostUser] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(likes.length);
  const currentUser = localStorage.getItem("userId");

  useEffect(() => {
    setIsLiked(likes.includes(currentUser));
  }, [likes, currentUser]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/users?userId=" + user
        );
        setPostUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, [user]);

  const handleLikes = async () => {
    try {
      axios.put(`http://localhost:3001/api/posts/${id}/like`, {
        userId: currentUser,
      });
    } catch (error) {
      console.log(error);
    }

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={postUser ? postUser?.profilePicture : null}
              className="postProfileImg"
              alt=""
            />
            <span className="postUsername">{postUser?.username}</span>
            <span className="postDate">{format(createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{text}</span>

          {img && <img src={img} alt="" className="postImg" />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Grade className="likeIcon" onClick={handleLikes} />
            <span className="postLikeCounter"> {like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">7 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
