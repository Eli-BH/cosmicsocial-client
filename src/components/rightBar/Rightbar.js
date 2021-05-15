import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./rightbar.scss";
import axios from "axios";

const Rightbar = ({ user }) => {
  const userId = localStorage.getItem("userId");
  const profileId = useParams().id;
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(null);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    if (user && user.followers) {
      setFollowed(user.followers.includes(userId) || false);
    }
  }, [user, userId]);

  useEffect(() => {
    if (user) {
      const getFollows = async () => {
        try {
          const friendsList = await axios.get(
            `https://cosmicsocialserver.herokuapp.com/api/users/follows/${user._id}`
          );
          setFriends(friendsList.data);
        } catch (error) {
          console.log(error);
        }
      };

      getFollows();
    }
  }, [user]);

  useEffect(() => {
    const getJoke = async () => {
      const { data } = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    };

    getJoke();
  }, []);

  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(
          `${process.env.REACT_APP_LOCALHOST}/users/${user._id}/unfollow`,
          { userId: userId }
        );
      } else {
        await axios.put(
          `${process.env.REACT_APP_LOCALHOST}/api/users/${user._id}/follow`,
          {
            userId: userId,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }

    setFollowed(!followed);
  };

  const HomeRightbar = () => {
    return (
      <div className="homeRightbarContent">
        <div className="birthdayContainer">
          <span className="birthdayText">
            <b>Peter Parker</b> and <b>3 other friends</b> have birthdays today.
          </span>
        </div>

        <h4 className="rightbarTitle">Have a Joke:</h4>
        <div className="rightbarJoke">
          <h3>{joke || "Joke Coming soon"}</h3>
        </div>

        <h4 className="rightbarPicTitle">Check out this Picture</h4>
        <div className="rightbarPic">
          <img
            src="https://source.unsplash.com/random"
            alt="randomImg"
            className="rightbarImgPic"
          />
        </div>
      </div>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {userId !== profileId && (
          <button className="rightbarFollowButton" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}

        <h4 className="rightBarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user?.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user?.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Age:</span>
            <span className="rightbarInfoValue">25</span>
          </div>
        </div>

        <h4 className="rightBarTitle">{`${user.firstName} follows these users`}</h4>
        <div className="rightbarFollowings">
          {friends?.map((friend) => (
            <Link
              key={friend._id}
              to={`/profile/${friend._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={friend.profilePicture}
                  alt={friend.username}
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
