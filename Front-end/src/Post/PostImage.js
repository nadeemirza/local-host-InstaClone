const PostImage = ({ config }) => {
  return (
    <div className="PostImage">
      <span>
        <img
          src={"http://localhost:5000/image/" + config.PostImage}
          alt="Pictures"
        ></img>
      </span>
    </div>
  );
};

export default PostImage;
