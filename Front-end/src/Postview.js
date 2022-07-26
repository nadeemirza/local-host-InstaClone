import React, { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post/Post";
import "./Postview.css";

const Postview = () => {
  const [posts, setPosts] = useState([]);

  const postViewAsync = async () => {
    const response = await fetch("http://localhost:5000/post");
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };
  useEffect(() => {
    postViewAsync();
  }, []);

  return (
    <div className="Postview">
      <Header />
      {posts.map((post, index) => (
        <Post key={index} config={post} />
      ))}
    </div>
  );
};
export default Postview;
