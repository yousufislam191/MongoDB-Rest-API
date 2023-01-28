const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/db");

const userRouter = require("./routes/users.routes");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});
app.use((req, res, next) => {
  res.status(404).send("page not found");
  res.end();
});
app.use((err, req, res, next) => {
  res.status(500).send("Server error: " + err.message);
});

module.exports = app;
