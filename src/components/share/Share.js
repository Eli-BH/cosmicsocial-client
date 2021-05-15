import "./share.scss";
import axios from "axios";
import { Cancel, PermMedia } from "@material-ui/icons";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getUserDataSelector } from "../../slices/user";

const Share = () => {
  const { userData } = useSelector(getUserDataSelector);
  const [file, setFile] = useState(null);

  const text = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === null) {
      const newPost = {
        userId: userData._id,
        text: text.current.value,
      };

      e.preventDefault();

      const sendPost = async () => {
        try {
          const res = await axios.post(
            "https://cosmicsocialserver.herokuapp.com/api/posts",
            newPost
          );
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      sendPost();
    } else {
      let formData = new FormData();
      formData.append("image", file);
      formData.append("text", text.current.value || "");
      formData.append("userId", userData._id);

      const sendPicPost = async () => {
        try {
          const res = await axios.post(
            "https://cosmicsocialserver.herokuapp.com/api/posts/picture",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      sendPicPost();
    }

    window.location.reload();
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={userData.profilePicture}
            alt={userData.username}
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
            <label htmlFor="myfile">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo </span>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            {file && (
              <div className="shareImgContainer">
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="shareImg"
                />
                <Cancel
                  className="shareCancelImg"
                  onClick={() => setFile(null)}
                />
              </div>
            )}
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
