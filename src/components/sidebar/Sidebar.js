import React from "react";
import {
  Chat,
  Explore,
  Face,
  Home,
  NotificationsActive,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <img
          src="https://i.imgur.com/WtQloZa.png"
          alt="CosmicSocial Logo"
          className="sidebarLogo"
        />
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Explore className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsActive className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
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
