import { Chat, Clear, Face, Home, People, Menu } from "@material-ui/icons";
import { useState } from "react";
import "./mobileSidebar.scss";

const MobileSidebar = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className={expand ? "mobileSideBar active" : "mobileSideBar"}>
      <span className="toggleOpen" onClick={toggleExpand}>
        <Menu className="toggleOpenIcon" />
      </span>
      <div className="mobileSidebarWrapper">
        <span className="toggle" onClick={toggleExpand}>
          <Clear className="toggleIcon" />
        </span>
        <div className="mobileSidebarTop">
          <img
            src="http://source.unsplash.com/random"
            alt="user"
            className="mobileSidebarImg"
          />
          <h3 className="mobileSidebarName">Tony Stank</h3>
          <span className="mobileSidebarUsername">@Ironman</span>

          <div className="mobileSidebarFollowerContainer">
            <span className="mobileSidebarFollowingKey">42</span>
            <p className="mobileSidebarFollowingValue">Following</p>
            <span className="mobileSidebarFollowingKey">321</span>
            <p className="mobileSidebarFollowingValue">Followers</p>
          </div>
        </div>

        <hr className="mobileSidebarHr" />
        <div className="mobileSidebarCenter">
          <ul className="mobileSidebarList">
            <li className="mobileSidebarListItem">
              <Face className="mobileSidebarIcon" />
              <span className="mobileSidebarListItemText">Profile</span>
            </li>
            <li className="mobileSidebarListItem">
              <Home className="mobileSidebarIcon" />
              <span className="mobileSidebarListItemText">Home</span>
            </li>
            <li className="mobileSidebarListItem">
              <Chat className="mobileSidebarIcon" />
              <span className="mobileSidebarListItemText">Chat</span>
            </li>
            <li className="mobileSidebarListItem">
              <People className="mobileSidebarIcon" />
              <span className="mobileSidebarListItemText">Friends</span>
            </li>
          </ul>
        </div>

        <hr className="mobileSidebarHr" />
        <div className="mobileSidebarBottom">
          <button className="mobileSidebarButton">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
