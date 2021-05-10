import Post from "../post/Post";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
