import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Feed from "../../components/feed/Feed";
import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";

const HomePage = () => {
  return (
    <div className="home">
      <MobileSidebar />
      <div className="hometop">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <div className="homebottom">
        <Bottombar />
      </div>
    </div>
  );
};

export default HomePage;
