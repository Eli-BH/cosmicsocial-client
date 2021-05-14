import Bottombar from "../../components/bottombar/Bottombar";
import MobileSidebar from "../../components/mobilesidebar/MobileSidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./searchPage.scss";
import axios from "axios";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [foundUser, setFoundUser] = useState(null);

  const searchQuery = useRef();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/users/all");
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/users/search?username=${searchQuery.current.value}`
      );
      setFoundUser(data);
    } catch (error) {
      setFoundUser(null);
      console.log("user not found");
      console.log(error);
    }

    searchQuery.current.value = "";
  };

  return (
    <div className="search">
      <MobileSidebar />
      <div className="searchTop">
        <Sidebar />
        <div className="searchFeed">
          <form className="searchForm" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              className="searchFeedInput"
              ref={searchQuery}
            />
          </form>

          <div className="searchUsers">
            {!foundUser ? (
              allUsers.map((user) => (
                <Link to={`/profile/${user._id}`} key={user._id}>
                  <div className="searchUserItem">
                    <img
                      className="searchUserItemImg"
                      src={user.profilePicture}
                      alt={user.username}
                    />
                    <p className="searchUserItemText">{user.username}</p>
                  </div>
                </Link>
              ))
            ) : (
              <Link to={`/profile/${foundUser._id}`} key={foundUser._id}>
                <div className="searchUserItem">
                  <img
                    className="searchUserItemImg"
                    src={foundUser.profilePicture}
                    alt={foundUser.username}
                  />
                  <p className="searchUserItemText">{foundUser.username}</p>
                </div>
              </Link>
            )}
          </div>
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
