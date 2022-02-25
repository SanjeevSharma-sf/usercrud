const express = require("express");

const app = express();

app.use(express.json());

//Route imports
const user = require("./server/routes/userRoute");
app.use(user);

module.exports = app;
