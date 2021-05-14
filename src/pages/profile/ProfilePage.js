import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rightbar";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const [postArr, setPostArr] = useState([]);
  const [curUserData, setCurUserData] = useState({});
  const [matchUser, setMatchUser] = useState(false);

  const curUser = useParams().id;
  const profileUser = localStorage.getItem("userId");

  console.log(curUser);

  useEffect(() => {
    curUser === profileUser ? setMatchUser(true) : setMatchUser(false);
  }, [curUser, profileUser]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios(
          "http://localhost:3001/api/posts/profile/" + curUser
        );

        setPostArr(res.data);
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
          `http://localhost:3001/api/users?userId=${curUser}`
        );
        setCurUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [curUser]);

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
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{curUserData?.username}</h4>
            <h4 className="profileInfoDesc">{curUserData?.desc}</h4>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed posts={postArr} user={matchUser} />
          <Rightbar user={curUserData} />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProfilePage;
