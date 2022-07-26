import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "./form.css";
function Form() {
  const [file, setFile] = useState("");
  const [name, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const imageUpload = (event) => {
    setFile(event.target.files[0]);
  };

  async function post(event) {
    event.preventDefault();
    const date = moment(new Date()).format("DD/MM/YYYY");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);

    formData.append("PostImage", file);
    formData.append("date", date);

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(alert("Post created successfully"))
      .then(navigate("/Postview"));
  }

  return (
    <div className="main">
      <center>
        <form onSubmit={post} encType="multipart/form-data" action="/Postview">
          <input
            type="file"
            className="file"
            name="PostImage"
            onChange={imageUpload}
            class="input"
            placeholder="No file chosen"
            required
          />
          <div className="middle">
            <input
              type="text"
              className="author"
              value={name}
              onChange={(e) => setAuthor(e.target.value)}
              class="input"
              placeholder="Author"
              required
            />
            <input
              type="text"
              className="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              class="input"
              placeholder="Location"
              required
            />
          </div>
          <input
            type="text"
            className="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="input"
            placeholder="Description"
            required
          />
          <br></br>
          <br></br>

          <button type="submit" className="btn">
            Post
          </button>
        </form>
      </center>
    </div>
  );
}

export default Form;
