import Bottombar from "../../components/bottombar/Bottombar";
import Feed from "../../components/feed/Feed";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./explore.scss";

import { useEffect } from "react";
import { exploreSelector, fetchExplore } from "../../slices/explore";
import { useDispatch, useSelector } from "react-redux";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const { exploreFeed, loading } = useSelector(exploreSelector);

  useEffect(() => {
    dispatch(fetchExplore());
  }, [dispatch]);

  return (
    <div className="explore">
      <MobileSidebar />
      <div className="exploreTop">
        <Sidebar />
        {loading && <h1>Loading</h1>}
        {exploreFeed.length ? (
          <Feed posts={exploreFeed} explore />
        ) : (
          <h1>Loading</h1>
        )}
        <Rightbar />
      </div>
      <div className="explorebottom">
        <Bottombar />
      </div>
    </div>
  );
};

export default ExplorePage;
