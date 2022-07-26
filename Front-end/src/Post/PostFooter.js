const PostFooter = ({ config }) => {
  return (
    <div className="PostFooter">
      <div className="PostDetails">
        <div className="LikesShareWrapper">
          <div className="LikeShareContainer">
            <div className="LikeIcon">
              <img src="heart1.png" alt="heart img" />
            </div>
            <div className="ShareIcon">
              <img src="share1.png" alt="heart img" />
            </div>
            <div className="PostedOn">{config.date}</div>
          </div>
        </div>
        <div className="likeCount">
          <div className="Likes">{config.likes}</div>
        </div>
      </div>
      <div className="PostCaption">{config.description}</div>
    </div>
  );
};

export default PostFooter;
