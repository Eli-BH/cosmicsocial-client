import "./sidebar.scss";
import { Chat, Explore, Face, Grade, Home, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataSelector, fetchUserData } from "../../slices/user";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(getUserDataSelector);

  useEffect(() => {
    dispatch(fetchUserData("6096ddfe0aae0ed0c0a515df"));
  }, [dispatch]);

  console.log(userData);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <img
          src="https://i.imgur.com/WtQloZa.png"
          alt="CosmicSocial Logo"
          className="sidebarLogo"
        />
        <ul className="sidebarList">
          <Link to="/" className="listLink" style={{ textDecoration: "none" }}>
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>{" "}
          </Link>
          <Link to="/explore" style={{ textDecoration: "none" }}>
            <li className="sidebarListItem">
              <Explore className="sidebarIcon" />
              <span className="sidebarListItemText">Explore</span>
            </li>
          </Link>

          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li className="sidebarListItem">
            <Grade className="sidebarIcon" />
            <span className="sidebarListItemText">Liked Posts</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <Face className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <button className="sidebarButton">Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;
