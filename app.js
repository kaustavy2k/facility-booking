const express = require("express");
const getFacilities = require("./routes/getFacilities");
const app = express();
app.use(express.json());

app.use("/", getFacilities);


module.exports = app;
