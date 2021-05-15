import "./sidebar.scss";
import { Explore, Face, Grade, Home, Search } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataSelector, fetchUserData } from "../../slices/user";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userData } = useSelector(getUserDataSelector);
  const user = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(fetchUserData(user));
  }, [dispatch, user]);

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

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
          <Link to="/search" style={{ textDecoration: "none" }}>
            <li className="sidebarListItem">
              <Search className="sidebarIcon" />
              <span className="sidebarListItemText">Search</span>
            </li>
          </Link>

          <Link
            to={`/liked/${userData._id}`}
            style={{ textDecoration: "none" }}
          >
            <li className="sidebarListItem">
              <Grade className="sidebarIcon" />
              <span className="sidebarListItemText">Liked Posts</span>
            </li>
          </Link>

          <Link
            to={`/profile/${userData._id}`}
            style={{ textDecoration: "none" }}
          >
            <li className="sidebarListItem">
              <Face className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </li>
          </Link>
        </ul>
        <hr className="sidebarHr" />
        <button className="sidebarButton" onClick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
