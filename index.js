const express = require("express");
const cookieParser = require("cookie-parser");
const port = process.env.port || 8000;
const app = express();
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const expressLayouts = require("express-ejs-layouts");
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo")(session);

app.use(express.urlencoded());
app.use(cookieParser());

// app.use("/uploads", express.static(__dirname + "/uploads"));

// setting up layouts
app.use(expressLayouts);
app.set("view engine", "ejs");
// extract style and script from sub pages
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// session
app.use(
  session({
    name: "nodejs",
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      (err) => console.log(err || "connect-mongodb setup ok")
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
// , (data) => {
//   console.log("inside passport session, ", data);
//   // next();
// });

app.use(passport.setAuthenticatedUser);

// routes middleware
app.use("/", require("./routes"));

console.log("creating session in index");

app.listen(port, (err) => {
  if (err) return console.log(`Error : ${err}`);

  console.log(` Server running on http://localhost:${port}`);
});
