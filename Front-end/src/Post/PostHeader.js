const PostHeader = ({ config }) => {
  return (
    <div className="PostHeader">
      <div className="PostDetailsWrapper">
        <div className="PostName">{config.name}</div>
        <div className="PostLocation">{config.location}</div>
      </div>
      <div className="PostOptions">...</div>
    </div>
  );
};

export default PostHeader;
