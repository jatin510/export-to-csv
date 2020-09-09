const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/employee");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user || user.password != password) {
          return done(null, false);
        }
        // console.log("done", user);
        return done(null, user);
      });
    }
  )
);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  // console.log(user);

  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error in finding user --> Passport");
      return done(err);
    }

    return done(null, user);
  });
});

passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log("is authenticated");
    return next();
  }

  return res.redirect("/signin");
};

passport.setAuthenticatedUser = function (req, res, next) {
  console.log("set authetnitcated user");
  if (req.isAuthenticated()) {
    // console.log("inside setAuthenUser", req.user);
    console.log("user is authenticated");
    res.locals.employee = req.user;
  }

  next();
};

module.exports = passport;
