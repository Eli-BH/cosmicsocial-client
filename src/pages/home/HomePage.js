import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Feed from "../../components/feed/Feed";
import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import axios from "axios";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserDataSelector } from "../../slices/user";

const HomePage = () => {
  // localStorage.getItem('userId')

  const [timeline, setTimeline] = useState([]);
  const { userData, loading } = useSelector(getUserDataSelector);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const res = await axios.get(
          " https://cosmicsocialserver.herokuapp.com/api/posts/timeline/" +
            userData._id
        );

        setTimeline(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimeline();
  }, [userData]);

  return userData ? (
    <div className="home">
      <MobileSidebar />
      <div className="hometop">
        <Sidebar />
        {timeline && <Feed posts={timeline} user />}
        <Rightbar />
      </div>
      <div className="homebottom">
        <Bottombar />
      </div>
    </div>
  ) : (
    loading && <h1>Loading</h1>
  );
};

export default HomePage;
