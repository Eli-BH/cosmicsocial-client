import { Home, Mail, Notifications, Search } from "@material-ui/icons";
import "./bottombar.scss";

const Bottombar = () => {
  return (
    <div className="bottomBar">
      <Home className="bottomBarIcon" />
      <Search className="bottomBarIcon" />
      <Notifications className="bottomBarIcon" />
      <Mail className="bottomBarIcon" />
    </div>
  );
};

export default Bottombar;
