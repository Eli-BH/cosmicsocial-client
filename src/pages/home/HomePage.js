import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Feed from "../../components/feed/Feed";
import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import axios from "axios";

import { useState, useEffect } from "react";

const HomePage = () => {
  // localStorage.getItem('userId')
  const user = localStorage.getItem("userId");
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/posts/timeline/" + user
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
  }, [user]);

  return (
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
  );
};

export default HomePage;
