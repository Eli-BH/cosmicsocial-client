import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.scss";

const Feed = ({ posts, explore, user }) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {!explore && user && <Share />}

        {posts?.map((post) => (
          <div key={post._id}>
            <Post
              text={post.text}
              img={post?.img}
              createdAt={post.createdAt}
              likes={post.likes}
              user={post.userId}
              id={post._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
