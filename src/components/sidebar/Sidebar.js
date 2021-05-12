import "./sidebar.scss";
import { Chat, Explore, Face, Grade, Home, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
            <Link to="/" className="listLink">
              <Home className="sidebarIcon" />
              <span
                className="sidebarListItemText"
                style={{ textDecoration: "none" }}
              >
                Home
              </span>
            </Link>
          </li>

          <li className="sidebarListItem">
            <Explore className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
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
