require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
var userid;
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const passportStrategy = require("./passport");
const oAuth2 = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");
const { initialize, putObject } = require("./index");
const clientid = "525086577272-54pddl8f4p8rb725ope30tbvf23vrhtc.apps.googleusercontent.com";
const clientsecret = "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";

app.use(cors());
app.use("/api/hotels/", require("./routes/hotelRoute"));
app.use("/api/bookings/", require("./routes/bookingRoute"));
app.use(express.json());

app.get("/", cors(), (req, res) => {});
// routes
// app.use("api/users", userRoutes);
// app.use("api/auth", authRoutes);
// app.use("api/password-reset", passwordResetRoutes);

app.get('/giveUser', (req, res) => {
  console.log(user);
  res.send(userdetail);
});

app.post("/api/upload", async (req, res) => {
  try {
    const { filename, contentType } = req.body;
    const url = await putObject(filename, contentType);
    const objectUrl = `https://rajpatel.s3.ap-south-1.amazonaws.com//uploads/user-uploads/${encodeURIComponent(
      filename
    )}`;

    res.json({ url, objectUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use('/api/users/' , require('./routes/usersRoute'))


app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);





// app.use(
//   session({
//     secret: "Meet2004@",
//     resave: false,
//     saveUninitialized: true,
//   })
// );


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 module.default =  userid;