const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDB = require("./db");
// connect database
const path = require("path");
const { sessionManagement } = require("./utils/sessionConnection.js");
const router = require("./router/route.js");
const { checkIsValid } = require("./middleware.js");

connectDB({ poolSize: 10 });
app.use(express.json());
// Define the middleware function
app.use(cors());

// connect session storage
sessionManagement(app);

app.use("/api", checkIsValid, router);

app.use("/", express.static(path.join(__dirname, "./public/build")));
app.get("/",(req,res) => {
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
})
app.get("/signin",(req,res) => {
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
})

app.get("/signup",(req,res) => {
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
})
app.get("/error",(req,res) => {
  res.sendFile(path.join(__dirname, "./public/build", "index.html"));
})


app.listen(1338, () => {
  console.log("listening on 1338");
});
