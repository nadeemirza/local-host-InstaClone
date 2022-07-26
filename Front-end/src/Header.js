import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <img src="Instaclone.png" alt="logo" />

      <span className="cameraIcon">
        <Link className="IconCamera" to="/form">
          <img src="camera.png" alt="icon" />
        </Link>
      </span>
    </div>
  );
};
export default Header;
