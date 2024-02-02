const express = require("express");
const bodyParser = require("body-parser");

// local import
const connectDb = require("./db.js");
const resumeRoutes = require("./controllers/resume.controller");
const { errorHandler } = require("./middlewares//app");

const app = express();

// middleware
app.use(bodyParser.json());
app.use("/api/resume", resumeRoutes);
app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("DB Connection Successed");
    app.listen(3000, () => console.log("Server started at 3000 port"));
  })
  .catch((err) => console.log(err));
