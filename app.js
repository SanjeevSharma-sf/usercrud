const express = require("express");

const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // load assets
// app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//Route imports
const user = require("./server/routes/userRoute");
const userRenderRoutes = require("./server/routes/userRenderRoutes");
app.use(userRenderRoutes);
app.use(user);

module.exports = app;
