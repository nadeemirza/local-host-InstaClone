var express = require("express");
var fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const userdb = require("./model/model");
mongoose.connect("mongodb://localhost:27017/Instaclone");
const path = require("path");

const multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "./uploads/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
});
const photo = path.join(__dirname, "./uploads/images");
app.use(express.static(photo));

const cors = require("cors");
const { response } = require("express");
const corsoptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsoptions));
app.use(express.json());
app.get("/post", async (req, res) => {
  console.log("Success");
  var user = await userdb.find();
  user.reverse();
  // res.json({ user });
  res.send(user);
});

app.post("/posts", upload.single("PostImage"), function (req, res, next) {
  var obj = new userdb({
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    PostImage: req.file.originalname,
    date: req.body.date,
  });
  app.get("/image/:id", (req, res) => {
    const photo = path.join(__dirname, "./uploads/images", req.params.id);
    res.sendFile(photo);
    console.log(photo);
  });

  obj
    .save()
    .then((response) => {
      response.json({
        message: "Post added successfull!",
      });
    })
    .catch((err) => ({
      message: "an error occured!",
    }));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
