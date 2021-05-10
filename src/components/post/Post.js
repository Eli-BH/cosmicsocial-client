import { ArrowUpward, MoreVert } from "@material-ui/icons";
import "./post.scss";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://source.unsplash.com/random"
              className="postProfileImg"
              alt=""
            />
            <span className="postUsername">CosmicDan</span>
            <span className="postDate">10*20*21</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quia veniam at eos. Laboriosam dolor tempore libero inventore minus?
            Similique!
          </span>
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ArrowUpward className="likeIcon" />
          </div>
          <span className="postLikeCounter"> 5 people like it</span>
          <div className="postBottomRight">
            <span className="postCommentText">7 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
