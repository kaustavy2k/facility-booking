const express = require("express");
const cookieParser=require("cookie-parser")
const getFacilities = require("./routes/getFacilities");
const cors = require("cors");
const app = express();
app.use(cookieParser())
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/", getFacilities);

module.exports = app;
