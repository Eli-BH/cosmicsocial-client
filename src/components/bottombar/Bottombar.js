import { Home, Mail, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./bottombar.scss";

const Bottombar = () => {
  return (
    <div className="bottomBar">
      <Link to="/">
        <Home className="bottomBarIcon" />
      </Link>
      <Link to="/search">
        <Search className="bottomBarIcon" />
      </Link>
      <Link to="/">
        <Notifications className="bottomBarIcon" />
      </Link>
      <Link to="/">
        <Mail className="bottomBarIcon" />
      </Link>
    </div>
  );
};

export default Bottombar;
