import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./searchPage.scss";
import axios from "axios";

const SearchPage = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <MobileSidebar />
      <div className="searchTop">
        <Sidebar />
        <div className="searchFeed">
          <input
            type="text"
            placeholder="Search..."
            className="searchFeedInput"
          />
        </div>
        <Rightbar />
      </div>
      <div className="searchBottom">
        <Bottombar />
      </div>
    </div>
  );
};

export default SearchPage;
