require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn")
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const oAuth2 = require("passport-google-oauth2").Strategy;
const userdb= require("./model/userSchema")
const { initialize, putObject } = require('./index');
const clientid ="525086577272-54pddl8f4p8rb725ope30tbvf23vrhtc.apps.googleusercontent.com"
const clientsecret ="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"


app.use(cors())

app.use('/api/hotels/' , require('./routes/hotelRoute'))

app.use(express.json());

app.get("/",cors(),(req,res)=>{


})
// routes
// app.use("api/users", userRoutes);
// app.use("api/auth", authRoutes);
// app.use("api/password-reset", passwordResetRoutes);

app.post('/api/upload', async (req, res) => {
    try {
        const { filename, contentType } = req.body;
        const url = await putObject(filename, contentType);
        const objectUrl = `https://rajpatel.s3.ap-south-1.amazonaws.com//uploads/user-uploads/${encodeURIComponent(filename)}`;


        res.json({ url, objectUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post("/login",async(req,res)=>{
    const{email,password}= req.body

    try{
        const check = await userdb.findOne({email:email})
        if(check){
            if(check.password===password){
                res.json("exist")
            }
            else{
                res.json("inv_pass")
            }
           
        }
        else{
        res.json("not_exist")
        }
        }catch(e){
            console.log(e)
            res.json("not_exist")
        }
        })


        app.post("/signup",async(req,res)=>{
            const{email,password,image,name}= req.body
            const data={
                email : email,
                password : password,
                displayName:name,
                image:image
            }
        
            try{
                    const check = await userdb.findOne({email:email})
        
                if(check){
                    res.json("exists")
                }
                else{
                res.json("not_exists")
                await userdb.insertMany([data])

                }
                }catch(e){
                                res.json("not_exists")
                        }
                })

app.use(session({
    secret:"Meet2004@",
    resave:false,
    saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new oAuth2( {
                clientID:clientid,
                clientSecret:clientsecret,
                callbackURL:"/auth/google/callback",
                scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try{
            let user = await userdb.findOne({googleId:profile.id});
                if(!user){
                            user = new userdb({

                                googleId:profile.id,
                                displayName:profile.displayName,
                                email:profile.emails[0].value,
                                image:profile.photos[0].value


                            });

                            await user.save();
                }
					
                    return done(null,user)
        }
        catch(error)
        {
            return done(error,null)
        }
    })

)

passport.serializeUser((user,done)=>{
    done(null,user);
})


passport.deserializeUser((user,done)=>{
    done(null,user);
})

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));
app.get("/auth/google/callback",passport.authenticate("google",{
    
    successRedirect:"http://localhost:3000/home",
    failureRedirect:"http://localhost:3000/signup/"
}))


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


