import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="img">
        <img src="LandingImage.jpg" alt="Cover" />
      </div>
      <div className="conatiner">
        <h1>
          InstaClone
          <button type="submit">
            <Link className="landinglink" to="../Postview">
              Enter
            </Link>
          </button>
        </h1>
      </div>
    </div>
  );
};
export default LandingPage;
