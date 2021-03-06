const app = require("./app");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
//const path = require("path");
const connectDatabase = require("./server/database/db");
//config
dotenv.config({ path: "server/config/config.env" });

//log requests
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"))




//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
