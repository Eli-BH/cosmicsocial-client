import "./share.scss";
import axios from "axios";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import { useState, useEffect, useRef } from "react";

const Share = () => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("userId")
  );

  const text = useRef();

  const handleSubmit = (e) => {
    const newPost = {
      userId: currentUser,
      text: text.current.value,
    };

    e.preventDefault();

    const sendPost = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/posts",
          newPost
        );
        console.log(res.data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };

    sendPost();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="shareProfileImg"
          />
          <textarea
            type="text"
            className="shareInput"
            placeholder="Shout to your friends"
            maxLength="280"
            ref={text}
          />
        </div>

        <hr className="shareHr" />

        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                // onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>

          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
