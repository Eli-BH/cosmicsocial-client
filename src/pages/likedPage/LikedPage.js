import "./likedPage.scss";
import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

import { useEffect, useState } from "react";
import axios from "axios";

const LikedPage = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(userId);

  useEffect(() => {
    const getLiked = async () => {
      const { data } = await axios.get(
        " https://cosmicsocialserver.herokuapp.com/api/posts/liked/" + userId
      );

      setLikedPosts(data);
    };

    getLiked();
  }, [userId]);

  return (
    <div className="liked">
      <MobileSidebar />
      <div className="likedTop">
        <Sidebar />
        <div className="likedFeed">
          <Feed posts={likedPosts} />
        </div>
        <Rightbar />
      </div>
      <div className="likedBottom">
        <Bottombar />
      </div>
    </div>
  );
};

export default LikedPage;
