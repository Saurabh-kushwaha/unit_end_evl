const passport = require("passport");
const User = require("../models/User.model");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      passReqToCallback: true,
    },
      async function (request, accessToken, refreshToken, profile, done) {
      
        const email = profile._json.email;
          
        let user = await User.findOne({ email: email })
        
        if (!user) {
            user = await User.create({
                email: email,
                name: profile._json.name,
                password: v4(),
                roles: ["customer"]
           })    
        }
       request.user = user
      // check if user exists
      // if not create one
          console.log(user);
      // callback with num and hte user object
      return done(null, user);
    }
  )
);

module.exports = passport;