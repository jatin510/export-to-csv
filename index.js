const express = require("express");
const cookieParser = require("cookie-parser");
const port = process.env.port || 8000;
const app = express();
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const expressLayouts = require("express-ejs-layouts");
// const passportLocal = require('./config/pass')

// const MongoStore = require("connect-mongo")(session);

app.use(express.urlencoded());
app.use(cookieParser());

app.use("/uploads", express.static(__dirname + "/uploads"));

// setting up layouts
app.use(expressLayouts);
app.set("view engine", "ejs");
// extract style and script from sub pages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) return console.log(`Error : ${err}`);

  console.log(` Server running on http://localhost:${port}`);
});
