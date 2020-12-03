const express = require("express");
const cookieParser = require("cookie-parser");
const getFacilities = require("./routes/getFacilities");
const cors = require("cors");
const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/", getFacilities);
app.use(express.static(__dirname + "/client/build"));
const path = require("path");
app.get("*", (req, res) => {
  res.status(200).sendFile("index.html", { root: __dirname });
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
module.exports = app;
