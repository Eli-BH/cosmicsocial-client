import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rightbar";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getUserDataSelector } from "../../slices/user";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const userId = useParams().id;

  const { userData, loading } = useSelector(getUserDataSelector);

  return user ? (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={userData?.coverPicture}
              alt=""
            />
            <img
              className="profileUserImg"
              src={userData?.profilePicture}
              alt=""
            />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{userData?.username}</h4>
            <h4 className="profileInfoDesc">{userData?.desc}</h4>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProfilePage;
