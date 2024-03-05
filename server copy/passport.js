const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
// const oAuth2 = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");
const ownerdb = require("./model/ownerSchema");
const clientid =
    "525086577272-54pddl8f4p8rb725ope30tbvf23vrhtc.apps.googleusercontent.com";
const clientsecret = "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";
passport.use(
    new GoogleStrategy(
        {
            clientID: clientid,
            clientSecret: clientsecret,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        async (accessToken, refreshToken, profile, callback) => {
            // const type = profile.state ;
            // console.log(req.query);
            try {
            //     if (type === "user") {
                    let user = await userdb.findOne({ googleId: profile.id });
                    // console.log(user);
                    if (!user) {
                        user = new userdb({
                            googleId: profile.id,
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            image: profile.photos[0].value,
                        });
                        await user.save();
                    }
                    profile._json = { ...profile._json, _id: user._id };
                // } else if (type === "owner") {
                //     let user = await ownerdb.findOne({ googleId: profile.id });
                //     // console.log(user);
                //     if (!user) {
                //         user = new ownerdb({
                //             googleId: profile.id,
                //             name: profile.displayName,
                //             email: profile.emails[0].value,
                //             image: profile.photos[0].value,
                //         });
                //         await user.save();
                //     }

                //     profile._json = { ...profile._json, _id: user._id };
                // }

                callback(null, profile);
            } catch (error) {
                // return done(error, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
