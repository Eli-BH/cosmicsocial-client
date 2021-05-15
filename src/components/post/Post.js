import { Grade, MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import { useState, useEffect, useRef } from "react";

import "./post.scss";
import axios from "axios";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

const Post = ({ text, img, createdAt, likes, user, id }) => {
  const [postUser, setPostUser] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(likes.length);
  const [show, setShow] = useState(false);
  const currentUser = localStorage.getItem("userId");

  const target = useRef(null);

  useEffect(() => {
    setIsLiked(likes.includes(currentUser));
  }, [likes, currentUser]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(
          "https://cosmicsocialserver.herokuapp.com/api/users?userId=" + user
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
      axios.put(
        `https://cosmicsocialserver.herokuapp.com/api/posts/${id}/like`,
        {
          userId: currentUser,
        }
      );
    } catch (error) {
      console.log(error);
    }

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://cosmicsocialserver.herokuapp.com/api/posts/${id}/${currentUser}`
      );
      setShow(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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

          {currentUser === postUser._id && (
            <div
              className="postTopRight"
              ref={target}
              onClick={() => {
                setShow(!show);
              }}
            >
              <MoreVert />
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                )}
              </Overlay>
            </div>
          )}
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
