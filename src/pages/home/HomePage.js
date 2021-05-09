import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Feed from "../../components/feed/Feed";

const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
};

export default HomePage;
