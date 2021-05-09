import { Add } from "@material-ui/icons";
import "./rightbar.scss";

const Rightbar = () => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Peter Parker</b> and <b>3 other friends</b> have birthdays today.
          </span>
        </div>
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
          <li>Guy</li>
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <button className="rightbarFollowButton">
          Follow <Add />
        </button>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Queens</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Brooklyn</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tony Stark</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <HomeRightbar /> */}
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default Rightbar;
