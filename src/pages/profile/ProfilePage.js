import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rightbar";
import Modal from "react-bootstrap/Modal";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Cancel } from "@material-ui/icons";

const ProfilePage = () => {
  const [postArr, setPostArr] = useState([]);
  const [curUserData, setCurUserData] = useState({});
  const [matchUser, setMatchUser] = useState(false);
  const [show, setShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [coverShow, setCoverShow] = useState(false);
  const [username, setUsername] = useState(curUserData.username);
  const [city, setCity] = useState(curUserData.city);
  const [from, setFrom] = useState(curUserData.from);
  const [file, setFile] = useState(null);

  const curUser = useParams().id;
  const profileUser = localStorage.getItem("userId");

  console.log(curUserData);
  console.log(file);

  useEffect(() => {
    curUser === profileUser ? setMatchUser(true) : setMatchUser(false);
  }, [curUser, profileUser]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios(
          "https://cosmicsocialserver.herokuapp.com/api/posts/profile/" +
            curUser
        );

        setPostArr(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [curUser]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios(
          `https://cosmicsocialserver.herokuapp.com/api/users?userId=${curUser}`
        );
        setCurUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [curUser]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleProfileClose = () => {
    setProfileShow(false);
  };
  const handleProfileShow = () => {
    setProfileShow(true);
  };
  const handleProfileForm = async () => {
    try {
      let formData = new FormData();

      formData.append("image", file);
      const res = await axios.post(
        "https://cosmicsocialserver.herokuapp.com/api/users/picture/" + curUser,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    handleProfileClose();
  };
  const handleCoverForm = async () => {
    try {
      let formData = new FormData();

      formData.append("image", file);
      const res = await axios.post(
        "https://cosmicsocialserver.herokuapp.com/api/users/cover/" + curUser,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      handleCoverClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCoverClose = () => {
    setCoverShow(false);
  };
  const handleCoverShow = () => {
    setCoverShow(true);
  };
  console.log(file);
  const handleForm = async () => {
    const editInfo = {
      username: username,
      city: city,
      from: from,
      userId: curUser,
    };
    const res = await axios.put(
      "https://cosmicsocialserver.herokuapp.com/api/users/" + curUser,
      editInfo
    );
    console.log(res.data);
    setShow(false);
  };

  return curUserData ? (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={curUserData?.coverPicture}
              alt=""
            />
            <img
              className="profileUserImg"
              src={curUserData?.profilePicture}
              alt=""
            />
            {matchUser && (
              <>
                <button className="profilePicButton" onClick={handleCoverShow}>
                  Change cover image
                </button>

                <button
                  className="profilePicButton"
                  onClick={handleProfileShow}
                >
                  Change profile image
                </button>
              </>
            )}
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{curUserData?.username}</h4>
            {matchUser && (
              <button className="editButton" onClick={handleShow}>
                Edit Profile
              </button>
            )}
            <h4 className="profileInfoDesc">{curUserData?.desc}</h4>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed posts={postArr} user={matchUser} />
          <Rightbar user={curUserData} />
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="editForm">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr />
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <hr />
            <input
              type="text"
              placeholder="From"
              onChange={(e) => setFrom(e.target.value)}
            />
            <br />
            <input type="number" min="14" max="120" placeholder="Age" />
            <br />
            <p>userImg</p>
            <p>Cover Img</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="modalBottomButton" onClick={handleForm}>
            Save Changes
          </button>
          <button className="modalBottomButtonClose" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={profileShow} onHide={handleProfileClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(e) => setFile(e.target.files[0])}
          />

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
        </Modal.Body>
        {console.log(file)}
        <Modal.Footer>
          <button variant="secondary" onClick={handleProfileClose}>
            Close
          </button>
          <button variant="primary" onClick={handleProfileForm}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={coverShow} onHide={handleCoverClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cover Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <label htmlFor="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(e) => setFile(e.target.files[0])}
          />
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
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleCoverClose}>
            Close
          </button>
          <button variant="primary" onClick={handleCoverForm}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProfilePage;
