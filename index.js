const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDB = require("./db");
// connect database

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

// app.get("/isValid", (req, res) => {
//   try {
//     if (!req.session.isAuth || req.session.isAuth == undefined)
//       return res.status(401).json({
//         status: "error",
//         message: "Not authenticated",
//       });
//     res.json({ status: "success", message: "You have authentication" });
//   } catch (error) {
//     res
//       .status(404)
//       .send({ status: "error", message: "API is working properly" });
//   }
// });
app.get("/", (req, res) => {
  req.session.name = "react2";
  res.json({ success: "success" });
});
app.listen(1338, () => {
  console.log("listening on 1338");
});
